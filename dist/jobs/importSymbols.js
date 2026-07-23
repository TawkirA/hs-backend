import { importStocksFromFile } from '../helpers/index.js';
const importStockSymbols = async () => {
    // const nasdaqURL = process.env.NASDAQ_URL;
    // if (!nasdaqURL) {
    //     throw new Error(
    //         'NASDAQ_URL missing'
    //     );
    // }
    // const response = await axios.get(nasdaqURL);
    // const lines = response.data
    //                 .split('\n')
    //                 .filter((line: string) => line.trim())
    //                 .slice(1, -1);
    // const stocks = lines.map((line: string) => {
    //     const [symbol, companyName, marketCategory ] = line.split("|");
    //     return {
    //         symbol,
    //         companyName,
    //         marketCategory
    //     };
    // });
    // for (const stock of stocks) {
    //     await Stock.updateOne(
    //         { symbol: stock.symbol },
    //         { $set: stock },
    //         { upsert: true }
    //     )
    // }
    // console.log(
    //   `${stocks.length} symbols imported`
    // );
    try {
        console.log('START IMPORTING SYMBOL');
        const count = await importStocksFromFile();
        console.log('SYMBOL COUNT - ', count);
        return {
            success: true,
            count
        };
    }
    catch (error) {
        console.error(error);
        return {
            success: false
        };
    }
};
export default importStockSymbols;
//# sourceMappingURL=importSymbols.js.map