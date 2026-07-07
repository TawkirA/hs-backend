import dotenv from 'dotenv';
dotenv.config();
const config = {
    port: Number(process.env.PORT) || 3000,
    nodeEnv: process.env.NODE_ENV || 'development',
    nasdaq_url: process.env.NASDAQ_URL
};
export default config;
//# sourceMappingURL=config.js.map