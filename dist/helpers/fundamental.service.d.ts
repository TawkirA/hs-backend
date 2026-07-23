interface FundamentalData {
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
export declare const fetchFundamental: (symbol: string) => Promise<FundamentalData | undefined>;
export declare const getLatestBalanceSheet: (data: any) => any;
export declare const calculateRatios: (financials: any) => {
    debtRatio: number | null;
    cashRatio: number | null;
    receivableTurnover: number | null;
};
export declare const updateFundamentals: (symbol: string) => Promise<void>;
export {};
//# sourceMappingURL=fundamental.service.d.ts.map