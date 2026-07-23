import YahooFinance from 'yahoo-finance2';
import config from '../config/config.js';
import { getHistoricalFromDB, getHistoricalFromMongo } from '../helpers/stockHistory.service.js';
import importSymbols from '../jobs/importSymbols.js';
import updateProfiles from '../jobs/updateProfiles.js';
import updateQuotes from '../jobs/updateQuotes.js';
import { download } from '../helpers/index.js';
import Stock from '../models/stocks.js';
import StockFundamental from '../models/stockFundamental.js';
const getErrorMessage = (error) => {
    return error instanceof Error ? error.message : 'Unexpected error';
};
const getSymbol = (req) => {
    const { symbol } = req.params;
    return typeof symbol === 'string' ? symbol.toUpperCase() + '.NS' : null;
};
// Get quote by symbol
export const getQuote = async (req, res, next) => {
    try {
        const symbol = getSymbol(req);
        if (!symbol) {
            return res.status(400).json({ success: false, error: "Route parameter 'symbol' is required." });
        }
        console.log('SYMBOL - ', symbol);
        const YF = new YahooFinance();
        const quote = await YF.quote(symbol);
        res.json({
            success: true,
            symbol: quote.symbol,
            price: quote.regularMarketPrice,
            currency: quote.currency,
            exchange: quote.fullExchangeName,
            change: quote.regularMarketChangePercent,
            data: quote
        });
    }
    catch (error) {
        res.status(500).json({ success: false, error: getErrorMessage(error) });
    }
};
// Get historical data by symbol
export const getHistoricalData = async (req, res, next) => {
    try {
        const symbol = getSymbol(req);
        if (!symbol) {
            return res.status(400).json({ success: false, error: "Route parameter 'symbol' is required." });
        }
        const YF = new YahooFinance();
        const { from, to } = req.query;
        if (typeof from !== 'string' || typeof to !== 'string') {
            return res.status(400).json({
                success: false,
                error: "Please provide 'from' and 'to' query parameters (YYYY-MM-DD format)."
            });
        }
        const queryOptions = { period1: from, period2: to };
        const historicalData = await YF.historical(symbol, queryOptions);
        res.json({ success: true, symbol, count: historicalData.length, data: historicalData });
    }
    catch (error) {
        res.status(500).json({ success: false, error: getErrorMessage(error) });
    }
};
// Search Assets or Tickers (e.g., /api/search?q=Apple)
export const search = async (req, res, next) => {
    try {
        const search = typeof req.query.q === 'string' ? req.query.q : '';
        console.log('Search query - ', req.query);
        const stocks = await Stock.find({
            $or: [
                {
                    symbol: {
                        $regex: `^${search}$`, // exact match of symbol
                        $options: 'i'
                    }
                },
                {
                    symbol: {
                        $regex: `^${search}`, // prefix match of symbol
                        $options: 'i'
                    }
                },
                {
                    companyName: {
                        $regex: search,
                        $options: 'i'
                    }
                }
            ]
        }).limit(10);
        res.json(stocks);
    }
    catch (error) {
        res.status(500).json({ success: false, error: getErrorMessage(error) });
    }
    // try {
    //     const { q } = req.query;
    //     if (typeof q !== 'string' || !q.trim()) {
    //         return res.status(400).json({ success: false, error: "Query parameter 'q' is required." });
    //     }
    //     const YF = new YahooFinance();
    //     const searchResults = await YF.search(q);
    //     res.json({ success: true, results: searchResults.quotes });
    // } catch (error) {
    //     res.status(500).json({ success: false, error: getErrorMessage(error) });
    // }
};
// Fecth top 5 trending stocks
export const getTopStocks = async (req, res, next) => {
    try {
        const YF = new YahooFinance();
        const trendingIN = await YF.trendingSymbols('IN');
        console.log("TRENDING 5 STOCKS - ", trendingIN);
        if (!trendingIN?.quotes?.length) {
            return res.status(404).json({ success: false, message: 'No trending INDIAN stock' });
        }
        // 2. Extract and slice to only grab the top 5 symbols
        const top5IndianStock = trendingIN.quotes.slice(0, 5).map(item => item.symbol);
        // 3. Request real-time market data for the 5 Indian stocks simultaneously 
        const indiantop5Quotes = await Promise.all(top5IndianStock.map(async (symbol) => {
            try {
                const q = await YF.quote(symbol);
                return {
                    symbol: q.symbol, // Will display with the .NS suffix (e.g., RELIANCE.NS)
                    companyName: q.shortName || q.longName,
                    priceINR: q.regularMarketPrice,
                    change: q.regularMarketChange,
                    changePercent: q.regularMarketChangePercent,
                    exchange: q.fullExchangeName || "NSE"
                };
            }
            catch (error) {
                return { symbol, error: "Failed to resolve live Indian stock metrics" };
            }
        }));
        res.json({
            success: true,
            market: "National Stock Exchange (NSE)",
            timestamp: new Date(),
            data: indiantop5Quotes
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch top Indian stocks",
            error: getErrorMessage(error)
        });
    }
};
// getStockList
export const getStockList = async (req, res, next) => {
    try {
        // await importSymbols();
        await updateProfiles();
        await updateQuotes();
        const symbolList = await download(config.nasdaq_url);
        console.log('symbolList - ', symbolList);
        const lines = symbolList.split("\n").filter(line => line.trim()).slice(0, -1);
        const finalList = lines.slice(1).map(line => {
            const [symbol] = line.split("|");
            return symbol;
        });
        res.status(200).json(finalList);
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch stock list",
            error: getErrorMessage(error)
        });
    }
};
export const getStocks = async (req, res) => {
    const page = Number(req.query.page || 1);
    const limit = Number(req.query.limit || 20);
    const skip = (page - 1) * limit;
    const stocks = await Stock.find()
        .skip(skip)
        .limit(limit);
    res.json(stocks);
};
export const getFilteredStocks = async (req, res) => {
    const filter = {};
    if (typeof req.query.sector === 'string') {
        filter.sector = req.query.sector;
    }
    const stocks = await Stock.find(filter);
    res.json(stocks);
};
export const topStocksByMarketCap = async (req, res) => {
    try {
        const stocks = await Stock.find().sort({ marketCap: -1 }).limit(5);
        res.json(stocks);
    }
    catch (error) {
        res.status(500).json({ success: false, error: getErrorMessage(error) });
    }
};
// export const getHistorical = async (req: Request, res: Response) => {
//     try {
//         const { symbol } = req.params;
//         symbol?.toString();
//         const days = Number(req.query.days || 30);
//         const data = await getHistoricalFromDB(symbol, days);
//         return res.status(200).json({
//             success: true,
//             count: data.length,
//             data
//         });
//     } catch (error) {
//         return res.status(500).json({
//             success: false,
//             message:
//                 error instanceof Error
//                     ? error.message
//                     : 'Unknown Error'
//         });
//     }
// }
export const getHistorical = async (req, res) => {
    try {
        const { symbol } = req.params;
        const symbl = symbol ? symbol.toString() : "";
        const days = Number(req.query.days || 30);
        const data = await getHistoricalFromMongo(symbl, days);
        return res.status(200)
            .json({
            success: true,
            count: data.length,
            data
        });
    }
    catch (error) {
        return res.status(500)
            .json({
            success: false,
            message: getErrorMessage(error)
        });
    }
};
export const getFundamentals = async (req, res) => {
    // const { symbol } = req.params;
    // console.log('SYMBOL - ', symbol);
    const symbl = getSymbol(req);
    console.log('SYMBL - ', symbl);
    let data = null;
    try {
        data = await StockFundamental.findOne({ symbol: symbl });
        console.log('data - ', data);
    }
    catch (error) {
        console.log('error - ', error);
    }
    res.json(data);
};
//# sourceMappingURL=stockController.js.map