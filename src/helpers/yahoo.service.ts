import yahooFinance from 'yahoo-finance2';

export async function getHistoricalFromYahoo(
    symbol: string,
    period1: Date,
    period2: Date
) {
    const YF = new yahooFinance();
    return YF.historical(
        symbol,
        {
            period1,
            period2,
            interval: '1d'
        }
    );
}