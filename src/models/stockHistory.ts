import mongoose, { Schema, Document } from 'mongoose';

export interface IStockHistory extends Document {
    symbol: string;
    date: Date;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
}

const StockHistorySchema = new Schema<IStockHistory>(
    {
        symbol: {
            type: String,
            required: true,
            index: true
        },

        date: {
            type: Date,
            required: true
        },

        open: Number,
        high: Number,
        low: Number,
        close: Number,
        volume: Number
    },
    {
        timestamps: true
    }
);

// Prevent duplicate candle insertion
StockHistorySchema.index(
    {
        symbol: 1,
        date: 1
    },
    {
        unique: true
    }
);

export default mongoose.model<IStockHistory>('StockHistory', StockHistorySchema);