import YahooFinance from 'yahoo-finance2';
import Stock from '../models/stocks.js';
const updateStockProfile = async (stock) => {
    const YF = new YahooFinance();
    try {
        const profile = await YF.quoteSummary(stock.symbol, {
            modules: ['assetProfile']
        });
        await Stock.updateOne({ _id: stock._id }, {
            $set: {
                sector: profile.assetProfile?.sector,
                industry: profile.assetProfile?.industry,
                lastProfileUpdated: new Date()
            }
        });
        // console.log(
        //     `Updated ${stock.symbol}`
        // );
    }
    catch (error) {
        console.error(stock.symbol);
        if (error instanceof Error) {
            console.error(error.message);
        }
        else {
            console.error('Unknown error');
        }
    }
};
const updateProfiles = async () => {
    const stocks = await Stock.find({
        sector: { $exists: false }
    });
    console.log('STOCKS Count - ', stocks.length);
    const batchSize = 5;
    for (let i = 0; i < stocks.length; i += batchSize) {
        const batch = stocks.slice(i, i + batchSize);
        await Promise.all(batch.map(stock => updateStockProfile(stock)));
    }
};
export default updateProfiles;
//# sourceMappingURL=updateProfiles.js.map