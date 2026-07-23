import mongoose, { Document } from 'mongoose';
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
export interface IStockFundamental extends Document {
    symbol: string;
    totalDebt?: number;
    totalAssets?: number;
    currentAssets?: number;
    currentLiabilities?: number;
    cashAndCashEquivalents: number;
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
declare const _default: mongoose.Model<IStockFundamental, {}, {}, {}, mongoose.Document<unknown, {}, IStockFundamental, {}, mongoose.DefaultSchemaOptions> & IStockFundamental & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IStockFundamental>;
export default _default;
//# sourceMappingURL=stockFundamental.d.ts.map