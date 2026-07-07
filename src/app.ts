import express from 'express';
import dotenv from 'dotenv';
import stockRoutes from './routes/stockRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import { errorHandler } from './middlewares/errorHandlers.js';
import { startCronJobs } from './jobs/scheduler.js';
import connectDB from './config/db_config.js';

dotenv.config();

console.log('mongoURL - ', process.env.MONGO_URI);

const app = express();

app.use(express.json());

// Connect database
await connectDB();

// start cron jobs
startCronJobs();

// Routes
app.use('/api/stock', stockRoutes);
app.use('/api/admin', adminRoutes);

// Global error handler
app.use(errorHandler);

export default app;