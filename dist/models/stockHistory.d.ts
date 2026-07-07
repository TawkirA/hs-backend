import mongoose, { Document } from 'mongoose';
export interface IStockHistory extends Document {
    symbol: string;
    date: Date;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
}
declare const _default: mongoose.Model<IStockHistory, {}, {}, {}, mongoose.Document<unknown, {}, IStockHistory, {}, mongoose.DefaultSchemaOptions> & IStockHistory & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IStockHistory>;
export default _default;
//# sourceMappingURL=stockHistory.d.ts.map