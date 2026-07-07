import https from 'https';
export const download = (url) => {
    return new Promise((resolve, reject) => {
        https.get(url, res => {
            let data = "";
            res.on("data", chunk => (data += chunk));
            res.on("end", () => resolve(data));
            res.on("error", reject);
        });
    });
};
//# sourceMappingURL=index.js.map