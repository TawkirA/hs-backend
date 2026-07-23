import mongoose, { Schema, Document } from 'mongoose';
const StockFundamentalSchema = new Schema({
    symbol: {
        type: String,
        unique: true,
        required: true,
        index: true
    },
    totalDebt: Number,
    totalAssets: Number,
    // totalCash: Number,
    currentAssets: Number,
    currentLiabilities: Number,
    cashAndCashEquivalents: Number,
    accountsReceivable: Number,
    revenue: Number,
    netIncome: Number,
    debtRatio: Number,
    debtToEquity: Number,
    cashRatio: Number,
    currentRatio: Number,
    receivableTurnover: Number,
    roe: Number,
    roa: Number,
}, {
    timestamps: true
});
export default mongoose.model('StockFundamental', StockFundamentalSchema);
//# sourceMappingURL=stockFundamental.js.map