import mongoose, { Schema, Document } from 'mongoose';
const StockHistorySchema = new Schema({
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
}, {
    timestamps: true
});
// Prevent duplicate candle insertion
StockHistorySchema.index({
    symbol: 1,
    date: 1
}, {
    unique: true
});
export default mongoose.model('StockHistory', StockHistorySchema);
//# sourceMappingURL=stockHistory.js.map