import express from 'express';

import {
    runHistoricalBackfill
}
from '../jobs/historicalSync.js';

const router =
    express.Router();

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

export default router;