import mongoose from 'mongoose';
declare const _default: mongoose.Model<{
    symbol: string;
    historicalSyncStatus: "PENDING" | "IN_PROGRESS" | "COMPLETED" | "FAILED";
    volume?: number | null;
    companyName?: string | null;
    exchange?: string | null;
    currentPrice?: number | null;
    change?: number | null;
    changePercent?: number | null;
    marketCap?: number | null;
    fiftyTwoWeekHigh?: number | null;
    fiftyTwoWeekLow?: number | null;
    currency?: string | null;
    lastPriceUpdated?: NativeDate | null;
    lastProfileUpdated?: NativeDate | null;
    historicalLoadedAt?: NativeDate | null;
    lastHistoricalDate?: NativeDate | null;
    sector?: string | null;
    industry?: string | null;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    symbol: string;
    historicalSyncStatus: "PENDING" | "IN_PROGRESS" | "COMPLETED" | "FAILED";
    volume?: number | null;
    companyName?: string | null;
    exchange?: string | null;
    currentPrice?: number | null;
    change?: number | null;
    changePercent?: number | null;
    marketCap?: number | null;
    fiftyTwoWeekHigh?: number | null;
    fiftyTwoWeekLow?: number | null;
    currency?: string | null;
    lastPriceUpdated?: NativeDate | null;
    lastProfileUpdated?: NativeDate | null;
    historicalLoadedAt?: NativeDate | null;
    lastHistoricalDate?: NativeDate | null;
    sector?: string | null;
    industry?: string | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    symbol: string;
    historicalSyncStatus: "PENDING" | "IN_PROGRESS" | "COMPLETED" | "FAILED";
    volume?: number | null;
    companyName?: string | null;
    exchange?: string | null;
    currentPrice?: number | null;
    change?: number | null;
    changePercent?: number | null;
    marketCap?: number | null;
    fiftyTwoWeekHigh?: number | null;
    fiftyTwoWeekLow?: number | null;
    currency?: string | null;
    lastPriceUpdated?: NativeDate | null;
    lastProfileUpdated?: NativeDate | null;
    historicalLoadedAt?: NativeDate | null;
    lastHistoricalDate?: NativeDate | null;
    sector?: string | null;
    industry?: string | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    symbol: string;
    historicalSyncStatus: "PENDING" | "IN_PROGRESS" | "COMPLETED" | "FAILED";
    volume?: number | null;
    companyName?: string | null;
    exchange?: string | null;
    currentPrice?: number | null;
    change?: number | null;
    changePercent?: number | null;
    marketCap?: number | null;
    fiftyTwoWeekHigh?: number | null;
    fiftyTwoWeekLow?: number | null;
    currency?: string | null;
    lastPriceUpdated?: NativeDate | null;
    lastProfileUpdated?: NativeDate | null;
    historicalLoadedAt?: NativeDate | null;
    lastHistoricalDate?: NativeDate | null;
    sector?: string | null;
    industry?: string | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    symbol: string;
    historicalSyncStatus: "PENDING" | "IN_PROGRESS" | "COMPLETED" | "FAILED";
    volume?: number | null;
    companyName?: string | null;
    exchange?: string | null;
    currentPrice?: number | null;
    change?: number | null;
    changePercent?: number | null;
    marketCap?: number | null;
    fiftyTwoWeekHigh?: number | null;
    fiftyTwoWeekLow?: number | null;
    currency?: string | null;
    lastPriceUpdated?: NativeDate | null;
    lastProfileUpdated?: NativeDate | null;
    historicalLoadedAt?: NativeDate | null;
    lastHistoricalDate?: NativeDate | null;
    sector?: string | null;
    industry?: string | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    symbol: string;
    historicalSyncStatus: "PENDING" | "IN_PROGRESS" | "COMPLETED" | "FAILED";
    volume?: number | null;
    companyName?: string | null;
    exchange?: string | null;
    currentPrice?: number | null;
    change?: number | null;
    changePercent?: number | null;
    marketCap?: number | null;
    fiftyTwoWeekHigh?: number | null;
    fiftyTwoWeekLow?: number | null;
    currency?: string | null;
    lastPriceUpdated?: NativeDate | null;
    lastProfileUpdated?: NativeDate | null;
    historicalLoadedAt?: NativeDate | null;
    lastHistoricalDate?: NativeDate | null;
    sector?: string | null;
    industry?: string | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    symbol: string;
    historicalSyncStatus: "PENDING" | "IN_PROGRESS" | "COMPLETED" | "FAILED";
    volume?: number | null;
    companyName?: string | null;
    exchange?: string | null;
    currentPrice?: number | null;
    change?: number | null;
    changePercent?: number | null;
    marketCap?: number | null;
    fiftyTwoWeekHigh?: number | null;
    fiftyTwoWeekLow?: number | null;
    currency?: string | null;
    lastPriceUpdated?: NativeDate | null;
    lastProfileUpdated?: NativeDate | null;
    historicalLoadedAt?: NativeDate | null;
    lastHistoricalDate?: NativeDate | null;
    sector?: string | null;
    industry?: string | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    symbol: string;
    historicalSyncStatus: "PENDING" | "IN_PROGRESS" | "COMPLETED" | "FAILED";
    volume?: number | null;
    companyName?: string | null;
    exchange?: string | null;
    currentPrice?: number | null;
    change?: number | null;
    changePercent?: number | null;
    marketCap?: number | null;
    fiftyTwoWeekHigh?: number | null;
    fiftyTwoWeekLow?: number | null;
    currency?: string | null;
    lastPriceUpdated?: NativeDate | null;
    lastProfileUpdated?: NativeDate | null;
    historicalLoadedAt?: NativeDate | null;
    lastHistoricalDate?: NativeDate | null;
    sector?: string | null;
    industry?: string | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default _default;
//# sourceMappingURL=stocks.d.ts.map