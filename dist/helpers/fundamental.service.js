import YahooFinance from 'yahoo-finance2';
import StockFundamental from '../models/stockFundamental.js';
;
export const fetchFundamental = async (symbol) => {
    const YF = new YahooFinance();
    try {
        const data = await YF.fundamentalsTimeSeries(symbol, {
            period1: '2024-01-01',
            type: 'annual',
            module: 'all'
        });
        // console.log('DATA[0] - ', data[0]);
        const latestData = data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
        console.log('DATA TIME SERIES - ', symbol);
        return latestData;
    }
    catch (error) {
        console.log('Error in fetching stockFundamental - ', error);
    }
};
export const getLatestBalanceSheet = (data) => {
    return data?.balanceSheetHistory?.balanceSheetStatements?.[0];
};
export const calculateRatios = (financials) => {
    const debtRatio = financials.totalDebt && financials.totalAssets ? financials.totalDebt / financials.totalAssets : null;
    const cashRatio = financials.totalCash && financials.currentLiabilities ? financials.totalCash / financials.currentLiabilities : null;
    const receivableTurnover = financials.revenue && financials.accountsReceivable ? financials.revenue / financials.accountsReceivable : null;
    return {
        debtRatio,
        cashRatio,
        receivableTurnover
    };
};
export const updateFundamentals = async (symbol) => {
    const data = await fetchFundamental(symbol);
    // const balanceSheet = data?.balanceSheetHistory?.balanceSheetStatements?.[0];
    // const incomeStatement = data?.incomeStatementHistory?.incomeStatementHistory?.[0];
    const totalDebt = data?.totalDebt || 0;
    // const totalCash = data?.financialData?.totalCash;
    const currentLiabilities = data?.currentLiabilities || 0;
    const cashAndCashEquivalents = data?.cashAndCashEquivalents || 0;
    const stockholdersEquity = data?.stockholdersEquity || 0;
    const currentAssets = data?.currentAssets || 0;
    const accountsReceivable = data?.accountsReceivable || 0;
    const totalAssets = data?.totalAssets || 0;
    const revenue = data?.totalRevenue || 0;
    const netIncome = data?.netIncome || 0;
    const debtRatio = totalDebt && totalAssets ? totalDebt / totalAssets : null;
    const debtToEquity = totalDebt && stockholdersEquity ? totalDebt / stockholdersEquity : null;
    const cashRatio = cashAndCashEquivalents && currentLiabilities ? cashAndCashEquivalents / currentLiabilities : null;
    const currentRatio = currentAssets && currentLiabilities ? currentAssets / currentLiabilities : null;
    const receivableTurnover = revenue && accountsReceivable ? revenue / accountsReceivable : null;
    const roe = netIncome && stockholdersEquity ? netIncome / stockholdersEquity : null;
    const roa = netIncome && totalAssets ? netIncome / totalAssets : null;
    await StockFundamental
        .updateOne({
        symbol
    }, {
        $set: {
            totalDebt,
            totalAssets,
            currentAssets,
            currentLiabilities,
            cashAndCashEquivalents,
            accountsReceivable,
            revenue,
            netIncome,
            debtRatio,
            debtToEquity,
            cashRatio,
            currentRatio,
            receivableTurnover,
            roe,
            roa
        }
    }, {
        upsert: true
    });
};
//# sourceMappingURL=fundamental.service.js.map