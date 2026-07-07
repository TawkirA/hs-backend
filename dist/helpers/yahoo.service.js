import yahooFinance from 'yahoo-finance2';
export async function getHistoricalFromYahoo(symbol, period1, period2) {
    const YF = new yahooFinance();
    return YF.historical(symbol, {
        period1,
        period2,
        interval: '1d'
    });
}
//# sourceMappingURL=yahoo.service.js.map