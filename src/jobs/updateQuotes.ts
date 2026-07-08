import YahooFinance from 'yahoo-finance2';
import Stock from '../models/stocks.js';

const updateQuotes = async () => {
    const YF = new YahooFinance();
    const stocks = await Stock.find().limit(1000);

    for (const stock of stocks) {
        try {
            const quote = await YF.quote(stock.symbol);

            await Stock.updateOne(
                { _id: stock._id },
                {
                    $set: {

                        currentPrice:
                          quote.regularMarketPrice,

                        change:
                          quote.regularMarketChange,

                        changePercent:
                          quote.regularMarketChangePercent,

                        marketCap:
                          quote.marketCap,

                        volume:
                          quote.regularMarketVolume,

                        exchange:
                          quote.exchange,

                        currency:
                          quote.currency,

                        fiftyTwoWeekHigh:
                          quote.fiftyTwoWeekHigh,

                        fiftyTwoWeekLow:
                          quote.fiftyTwoWeekLow,

                        lastPriceUpdated:
                          new Date()
                    }
                }
            )

        } catch (error) {
          console.error(stock.symbol);
          if (
            error instanceof Error
          ) {

            console.error(
              error.message
            );

          } else {

            console.error(
              'Unknown error'
            );
          }
        }
    }
}

export default updateQuotes;