import express from 'express';
import { runHistoricalBackfill } from '../jobs/historicalSync.js';
import importStockSymbols from '../jobs/importSymbols.js';

const router = express.Router();

router.post(
    '/backfill-history',
    async (
        req,
        res
    ) => {

        runHistoricalBackfill();

        return res.json({
            success: true,
            message:
                'Backfill Started'
        });
    }
);
router.get('/import-symbols', importStockSymbols);


export default router;