import axios from 'axios';
import Stock from '../models/stocks.js';

const importSymbols = async () => {
    const nasdaqURL = process.env.NASDAQ_URL;
    if (!nasdaqURL) {
        throw new Error(
            'NASDAQ_URL missing'
        );
    }

    const response = await axios.get(nasdaqURL);

    const lines = response.data
                    .split('\n')
                    .filter((line: string) => line.trim())
                    .slice(1, -1);

    const stocks = lines.map((line: string) => {
        const [symbol, companyName, marketCategory ] = line.split("|");

        return {
            symbol,
            companyName,
            marketCategory
        };
    });

    for (const stock of stocks) {
        await Stock.updateOne(
            { symbol: stock.symbol },
            { $set: stock },
            { upsert: true }
        )
    }

    console.log(
      `${stocks.length} symbols imported`
    );
}

export default importSymbols;