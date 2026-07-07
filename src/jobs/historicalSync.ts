import Stock from '../models/stocks.js';
import { syncHistoricalData, backfillHistory } from '../helpers/stockHistory.service.js';

const BATCH_SIZE = 20;

export const runHistoricalSync = async () => {
    console.log('Historical data sync started');
    const stocks = await Stock.find().select('symbol');

    for (const stock of stocks) {
        try {
            await syncHistoricalData(stock.symbol);

            console.log(`Historical synced: ${stock.symbol}`);
        } catch (error) {
            console.error(
                stock.symbol,
                error
            );
        }
    }

    console.log('Historical data sync completed');
}

// 5. Batch Job
// jobs/backfillHistorical.job.ts
export const runHistoricalBackfill = async () => {
    const stocks = await Stock.find({
        historicalSyncStatus: 'PENDING'
    });

    console.log(`Pending Stocks : ${stocks.length}`);

    for (let i = 0; i < stocks.length; i += BATCH_SIZE) {
        const batch = stocks.slice(i, i + BATCH_SIZE);

        await Promise.all(
            batch.map(async stock => {
                try {
                    await Stock.updateOne(
                        {
                            _id: stock._id
                        },
                        {
                            $set: {
                                historicalSyncStatus:
                                    'IN_PROGRESS'
                            }
                        }
                    );

                    const latest = await backfillHistory(stock.symbol);

                    await Stock.updateOne(
                        {
                            _id:
                                stock._id
                        },
                        {
                            $set: {

                                historicalSyncStatus:
                                    'COMPLETED',

                                historicalLoadedAt:
                                    new Date(),

                                lastHistoricalDate:
                                    latest?.date
                            }
                        }
                    );

                    console.log(
                        `Completed : ${stock.symbol}`
                    );
                } catch (error) {
                    await Stock.updateOne(
                        {
                            _id:
                                stock._id
                        },
                        {
                            $set: {
                                historicalSyncStatus:
                                    'FAILED'
                            }
                        }
                    );

                    console.error(
                        stock.symbol,
                        error
                    );
                }
            })
        )
    }
}

export default {
    runHistoricalSync,
    runHistoricalBackfill
}
