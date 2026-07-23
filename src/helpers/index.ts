import https from 'https';
import fs from 'fs';
import path from 'path';
import * as csv from 'csv-parser';
import type { URL } from 'node:url';
import Stock from '../models/stocks.js';

export const download = (url: string | https.RequestOptions | URL) => {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      let data = "";
      res.on("data", chunk => (data += chunk));
      res.on("end", () => resolve(data));
      res.on("error", reject);
    });
  });
}

export const importStocksFromFile = () => {
  const filePath = path.join(process.cwd(), 'src/docs', 'NSE_CM_security_20072026.csv');
  console.log('filePATH - ', filePath);

  const stocks: any[] = [];

  return new Promise(
    (
      resolve,
      reject
    ) => {
      fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (row: any) => {
          if (row.SctySrs === 'EQ') {
            stocks.push({
              symbol: `${row.TckrSymb}.NS`,
              companyName: row['FinInstrmNm'] || row.FinInstrmNm,
              isin: row.ISIN,
              exchange: 'NSE',
              series: row.SctySrs
            });
          }
        })
        .on('end', async () => {
          try {
            const operations = stocks.map(stock => ({
              updateOne: {
                filter: {
                  symbol: stock.symbol
                },
                update: {
                  $set: stock
                },
                upsert: true
              }
            })
            );

            await Stock.bulkWrite(
              operations,
              {
                ordered: false
              }
            );

            resolve(
              stocks.length
            );
          } catch (error) {
            reject(error);
          }
        });
    }
  )
}
