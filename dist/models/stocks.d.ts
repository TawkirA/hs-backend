import mongoose from 'mongoose';
declare const _default: mongoose.Model<{
    symbol: string;
    historicalSyncStatus: "PENDING" | "IN_PROGRESS" | "COMPLETED" | "FAILED";
    volume?: number | null | undefined;
    companyName?: string | null | undefined;
    exchange?: string | null | undefined;
    currentPrice?: number | null | undefined;
    change?: number | null | undefined;
    changePercent?: number | null | undefined;
    marketCap?: number | null | undefined;
    fiftyTwoWeekHigh?: number | null | undefined;
    fiftyTwoWeekLow?: number | null | undefined;
    currency?: string | null | undefined;
    lastPriceUpdated?: NativeDate | null | undefined;
    lastProfileUpdated?: NativeDate | null | undefined;
    historicalLoadedAt?: NativeDate | null | undefined;
    lastHistoricalDate?: NativeDate | null | undefined;
    sector?: string | null | undefined;
    industry?: string | null | undefined;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    symbol: string;
    historicalSyncStatus: "PENDING" | "IN_PROGRESS" | "COMPLETED" | "FAILED";
    volume?: number | null | undefined;
    companyName?: string | null | undefined;
    exchange?: string | null | undefined;
    currentPrice?: number | null | undefined;
    change?: number | null | undefined;
    changePercent?: number | null | undefined;
    marketCap?: number | null | undefined;
    fiftyTwoWeekHigh?: number | null | undefined;
    fiftyTwoWeekLow?: number | null | undefined;
    currency?: string | null | undefined;
    lastPriceUpdated?: NativeDate | null | undefined;
    lastProfileUpdated?: NativeDate | null | undefined;
    historicalLoadedAt?: NativeDate | null | undefined;
    lastHistoricalDate?: NativeDate | null | undefined;
    sector?: string | null | undefined;
    industry?: string | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    symbol: string;
    historicalSyncStatus: "PENDING" | "IN_PROGRESS" | "COMPLETED" | "FAILED";
    volume?: number | null | undefined;
    companyName?: string | null | undefined;
    exchange?: string | null | undefined;
    currentPrice?: number | null | undefined;
    change?: number | null | undefined;
    changePercent?: number | null | undefined;
    marketCap?: number | null | undefined;
    fiftyTwoWeekHigh?: number | null | undefined;
    fiftyTwoWeekLow?: number | null | undefined;
    currency?: string | null | undefined;
    lastPriceUpdated?: NativeDate | null | undefined;
    lastProfileUpdated?: NativeDate | null | undefined;
    historicalLoadedAt?: NativeDate | null | undefined;
    lastHistoricalDate?: NativeDate | null | undefined;
    sector?: string | null | undefined;
    industry?: string | null | undefined;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    symbol: string;
    historicalSyncStatus: "PENDING" | "IN_PROGRESS" | "COMPLETED" | "FAILED";
    volume?: number | null | undefined;
    companyName?: string | null | undefined;
    exchange?: string | null | undefined;
    currentPrice?: number | null | undefined;
    change?: number | null | undefined;
    changePercent?: number | null | undefined;
    marketCap?: number | null | undefined;
    fiftyTwoWeekHigh?: number | null | undefined;
    fiftyTwoWeekLow?: number | null | undefined;
    currency?: string | null | undefined;
    lastPriceUpdated?: NativeDate | null | undefined;
    lastProfileUpdated?: NativeDate | null | undefined;
    historicalLoadedAt?: NativeDate | null | undefined;
    lastHistoricalDate?: NativeDate | null | undefined;
    sector?: string | null | undefined;
    industry?: string | null | undefined;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    symbol: string;
    historicalSyncStatus: "PENDING" | "IN_PROGRESS" | "COMPLETED" | "FAILED";
    volume?: number | null | undefined;
    companyName?: string | null | undefined;
    exchange?: string | null | undefined;
    currentPrice?: number | null | undefined;
    change?: number | null | undefined;
    changePercent?: number | null | undefined;
    marketCap?: number | null | undefined;
    fiftyTwoWeekHigh?: number | null | undefined;
    fiftyTwoWeekLow?: number | null | undefined;
    currency?: string | null | undefined;
    lastPriceUpdated?: NativeDate | null | undefined;
    lastProfileUpdated?: NativeDate | null | undefined;
    historicalLoadedAt?: NativeDate | null | undefined;
    lastHistoricalDate?: NativeDate | null | undefined;
    sector?: string | null | undefined;
    industry?: string | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, Omit<mongoose.DefaultSchemaOptions, "timestamps"> & {
    timestamps: true;
}> & Omit<{
    symbol: string;
    historicalSyncStatus: "PENDING" | "IN_PROGRESS" | "COMPLETED" | "FAILED";
    volume?: number | null | undefined;
    companyName?: string | null | undefined;
    exchange?: string | null | undefined;
    currentPrice?: number | null | undefined;
    change?: number | null | undefined;
    changePercent?: number | null | undefined;
    marketCap?: number | null | undefined;
    fiftyTwoWeekHigh?: number | null | undefined;
    fiftyTwoWeekLow?: number | null | undefined;
    currency?: string | null | undefined;
    lastPriceUpdated?: NativeDate | null | undefined;
    lastProfileUpdated?: NativeDate | null | undefined;
    historicalLoadedAt?: NativeDate | null | undefined;
    lastHistoricalDate?: NativeDate | null | undefined;
    sector?: string | null | undefined;
    industry?: string | null | undefined;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    symbol: string;
    historicalSyncStatus: "PENDING" | "IN_PROGRESS" | "COMPLETED" | "FAILED";
    volume?: number | null | undefined;
    companyName?: string | null | undefined;
    exchange?: string | null | undefined;
    currentPrice?: number | null | undefined;
    change?: number | null | undefined;
    changePercent?: number | null | undefined;
    marketCap?: number | null | undefined;
    fiftyTwoWeekHigh?: number | null | undefined;
    fiftyTwoWeekLow?: number | null | undefined;
    currency?: string | null | undefined;
    lastPriceUpdated?: NativeDate | null | undefined;
    lastProfileUpdated?: NativeDate | null | undefined;
    historicalLoadedAt?: NativeDate | null | undefined;
    lastHistoricalDate?: NativeDate | null | undefined;
    sector?: string | null | undefined;
    industry?: string | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    symbol: string;
    historicalSyncStatus: "PENDING" | "IN_PROGRESS" | "COMPLETED" | "FAILED";
    volume?: number | null | undefined;
    companyName?: string | null | undefined;
    exchange?: string | null | undefined;
    currentPrice?: number | null | undefined;
    change?: number | null | undefined;
    changePercent?: number | null | undefined;
    marketCap?: number | null | undefined;
    fiftyTwoWeekHigh?: number | null | undefined;
    fiftyTwoWeekLow?: number | null | undefined;
    currency?: string | null | undefined;
    lastPriceUpdated?: NativeDate | null | undefined;
    lastProfileUpdated?: NativeDate | null | undefined;
    historicalLoadedAt?: NativeDate | null | undefined;
    lastHistoricalDate?: NativeDate | null | undefined;
    sector?: string | null | undefined;
    industry?: string | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default _default;
//# sourceMappingURL=stocks.d.ts.map