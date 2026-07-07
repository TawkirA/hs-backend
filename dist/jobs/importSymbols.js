import axios from 'axios';
import Stock from '../models/stocks.js';
const importSymbols = async () => {
    const response = await axios.get(process.env.NASDAQ_URL);
    const lines = response.data
        .split("\n")
        .filter(line => line.trim())
        .slice(1, -1);
    const stocks = lines.map(line => {
        const [symbol, companyName, marketCategory] = line.split("|");
        return {
            symbol,
            companyName,
            marketCategory
        };
    });
    for (const stock of stocks) {
        await Stock.updateOne({ symbol: stock.symbol }, { $set: stock }, { upsert: true });
    }
    console.log(`${stocks.length} symbols imported`);
};
export default importSymbols;
//# sourceMappingURL=importSymbols.js.map