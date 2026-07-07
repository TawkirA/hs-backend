import https from 'https';
import type { URL } from 'node:url';

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