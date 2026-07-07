import YahooFinance from 'yahoo-finance2';
import Stock from '../models/stocks.js';
const updateProfiles = async () => {
    const YF = new YahooFinance();
    const stocks = await Stock.find({
        sector: { $exists: false }
    }).limit(100);
    for (const stock of stocks) {
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
            console.log(`Updated ${stock.symbol}`);
        }
        catch (error) {
            console.error(stock.symbol, error.message);
        }
    }
};
export default updateProfiles;
//# sourceMappingURL=updateProfiles.js.map