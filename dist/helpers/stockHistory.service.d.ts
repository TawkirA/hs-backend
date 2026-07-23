export declare const syncHistoricalData: (symbol: string) => Promise<void>;
export declare const getHistoricalFromDB: (symbol: string, days: number) => import("mongoose").Query<(import("../models/stockHistory.js").IStockHistory & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
})[], import("mongoose").Document<unknown, {}, import("../models/stockHistory.js").IStockHistory, {}, import("mongoose").DefaultSchemaOptions> & import("../models/stockHistory.js").IStockHistory & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, {}, import("../models/stockHistory.js").IStockHistory, "find", {}>;
export declare const backfillHistory: (symbol: string) => Promise<import("yahoo-finance2/modules/historical").HistoricalRowHistory | null>;
export declare const getHistoricalFromMongo: (symbol: string, days: number) => Promise<(import("../models/stockHistory.js").IStockHistory & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
})[]>;
declare const _default: {
    syncHistoricalData: (symbol: string) => Promise<void>;
    getHistoricalFromDB: (symbol: string, days: number) => import("mongoose").Query<(import("../models/stockHistory.js").IStockHistory & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, import("../models/stockHistory.js").IStockHistory, {}, import("mongoose").DefaultSchemaOptions> & import("../models/stockHistory.js").IStockHistory & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }, {}, import("../models/stockHistory.js").IStockHistory, "find", {}>;
    backfillHistory: (symbol: string) => Promise<import("yahoo-finance2/modules/historical").HistoricalRowHistory | null>;
    getHistoricalFromMongo: (symbol: string, days: number) => Promise<(import("../models/stockHistory.js").IStockHistory & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
};
export default _default;
//# sourceMappingURL=stockHistory.service.d.ts.map