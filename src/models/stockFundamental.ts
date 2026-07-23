import mongoose, { Schema, Document } from 'mongoose';

export interface FundamentalData {
  totalDebt?: number;
  totalAssets?: number;
  stockholdersEquity?: number;
  currentAssets?: number;
  currentLiabilities?: number;
  cashAndCashEquivalents?: number;
  accountsReceivable?: number;
  totalRevenue?: number;
  netIncome?: number;
}

export interface IStockFundamental
    extends Document {
    symbol: string;
    totalDebt?: number;
    totalAssets?: number;
    // totalCash?: number;
    currentAssets?: number;
    currentLiabilities?: number;
    cashAndCashEquivalents: number,
    accountsReceivable?: number;
    revenue?: number;
    netIncome?: number;
    debtRatio?: number;
    debtToEquity?: number;
    cashRatio?: number;
    currentRatio?: number;
    receivableTurnover?: number;
    roe: Number;
    roa: Number;
    updatedAt?: Date;
}

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
},
    {
        timestamps: true
    }
);

export default mongoose.model<IStockFundamental>('StockFundamental', StockFundamentalSchema);