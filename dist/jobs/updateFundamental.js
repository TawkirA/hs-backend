import Stock from '../models/stocks.js';
import { updateFundamentals } from '../helpers/fundamental.service.js';
export const runFundamentalJob = async () => {
    const stocks = await Stock.find().select('symbol');
    console.log('STOCKS Count - ', stocks.length);
    const batchSize = 5;
    for (let i = 0; i < stocks.length; i += batchSize) {
        const batch = stocks.slice(i, i + batchSize);
        await Promise.all(batch.map(stock => updateFundamentals(stock.symbol)));
    }
};
//# sourceMappingURL=updateFundamental.js.map