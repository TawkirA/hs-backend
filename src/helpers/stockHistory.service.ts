import StockHistory from '../models/stockHistory.js';
import { getHistoricalFromYahoo } from './yahoo.service.js';

export const syncHistoricalData = async (symbol: string): Promise<void> => {
    const latestRecord =
        await StockHistory
            .findOne({ symbol })
            .sort({ date: -1 });

    let startDate: Date;

    if (latestRecord) {

        startDate = new Date(
            latestRecord.date
        );

        startDate.setDate(
            startDate.getDate() + 1
        );

    } else {
        // Initial load
        startDate = new Date('2026-01-01');
    }

    const endDate = new Date();

    const candles =
        await getHistoricalFromYahoo(
            symbol,
            startDate,
            endDate
        );

    if (!candles.length) {
        return;
    }

    const bulkOps = candles.map(
        (candle: { date: any; open: any; high: any; low: any; close: any; volume: any; }) => ({
            updateOne: {
                filter: {
                    symbol,
                    date: candle.date
                },
                update: {
                    $set: {
                        symbol,
                        date: candle.date,
                        open: candle.open,
                        high: candle.high,
                        low: candle.low,
                        close: candle.close,
                        volume: candle.volume
                    }
                },
                upsert: true
            }
        })
    );

    await StockHistory.bulkWrite(
        bulkOps,
        {
            ordered: false
        }
    );
}

export const getHistoricalFromDB = (symbol: string, days: number) => {
    const startDate = new Date();

    startDate.setDate(
        startDate.getDate() - days
    );

    return StockHistory
            .find({
                symbol,
                date: {
                    $gte: startDate
                }
            })
            .sort({
                date: 1
            })
            .lean();
}

export const backfillHistory = async (symbol: string) => {
    const candles = await getHistoricalFromYahoo(symbol, new Date('2026-01-01'), new Date());

    if (!candles.length) {
        return null;
    }

    const operations = candles.map((candle: { date: any; open: any; high: any; low: any; close: any; volume: any; }) => ({
        updateOne: {
            filter: {
                symbol,
                date: candle.date
            },

            update: {
                $set: {
                    symbol,
                    date: candle.date,
                    open: candle.open,
                    high: candle.high,
                    low: candle.low,
                    close: candle.close,
                    volume: candle.volume
                }
            },
            upsert: true
        }
    }));

    await StockHistory.bulkWrite(
        operations,
        {
            ordered: false
        }
    );

    return candles[candles.length - 1];
}

export const getHistoricalFromMongo = async (symbol: string, days: number) => {
    const startDate =
        new Date();

    startDate.setDate(
        startDate.getDate() - days
    );

    return StockHistory.find({
        symbol,

        date: {
            $gte: startDate
        }
    })
    .sort({
        date: 1
    })
    .lean();
}

export default {
  syncHistoricalData,
  getHistoricalFromDB,
  backfillHistory,
  getHistoricalFromMongo
}
