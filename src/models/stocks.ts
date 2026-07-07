import mongoose, { Schema } from 'mongoose';

const StockSchema = new Schema(
    {
        symbol: {
            type: String,
            required: true,
            unique: true,
            index: true
        },

        companyName: String,

        sector: {
            type: String,
            index: true
        },

        industry: {
            type: String,
            index: true
        },

        exchange: String,

        currentPrice: Number,

        change: Number,

        changePercent: Number,

        marketCap: Number,

        volume: Number,

        historicalSyncStatus: {
            type: String,
            enum: [
                'PENDING',
                'IN_PROGRESS',
                'COMPLETED',
                'FAILED'
            ],
            default: 'PENDING'
        },

        fiftyTwoWeekHigh: Number,

        fiftyTwoWeekLow: Number,

        currency: String,

        lastPriceUpdated: Date,

        lastProfileUpdated: Date,

        historicalLoadedAt: Date,

        lastHistoricalDate: Date
    },
    {
        timestamps: true
    }
);

export default mongoose.model('Stock', StockSchema);