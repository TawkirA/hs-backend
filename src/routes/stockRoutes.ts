import { Router } from "express";
import {
    getQuote,
    getHistoricalData,
    search,
    getTopStocks,
    getStockList,
    getStocks,
    getFilteredStocks,
    topStocksByMarketCap,
    getHistorical,
    getFundamentals
} from '../controllers/stockController.js';

const router = Router();

router.get('/quote/:symbol', getQuote);
// router.get('/historical/:symbol', getHistoricalData);
router.get('/historical/:symbol', getHistorical);
router.get('/search', search);
router.get('/top-indian-stocks', getTopStocks);
router.get('/lists', getStocks);
router.get('/filter', getFilteredStocks);
router.get('/top/marketCap', topStocksByMarketCap);
router.get('/fundamentals/:symbol', getFundamentals);

export default router;