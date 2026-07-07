import cron from 'node-cron';
import importSymbols from './importSymbols.js';
import updateQuotes from './updateQuotes.js';
import updateProfiles from './updateProfiles.js';
import { runHistoricalSync } from './historicalSync.js';
export const startCronJobs = () => {
    // Every 15 minutes
    cron.schedule('*/15 * * * *', async () => {
        try {
            console.log('Cron job started for updating quotes');
            await updateQuotes();
            console.log('Cron job completed for updating quotes');
        }
        catch (error) {
            console.error(error);
        }
    });
    // Every 24 hours
    cron.schedule('0 2 * * *', async () => {
        try {
            console.log('Cron job started for updating profiles');
            await updateProfiles();
            console.log('Cron job completed for updating profiles');
        }
        catch (error) {
            console.error(error);
        }
    });
    // Every 24 hours
    cron.schedule('0 2 * * *', async () => {
        try {
            console.log('Cron job started for updating profiles');
            await updateProfiles();
            console.log('Cron job completed for updating profiles');
        }
        catch (error) {
            console.error(error);
        }
    });
    // Daily at 2:00 AM
    cron.schedule('0 2 * * *', async () => {
        try {
            console.log('Cron job started for updating profiles');
            await updateProfiles();
            console.log('Cron job completed for updating profiles');
        }
        catch (error) {
            console.error(error);
        }
    });
    // Every Sunday at 3:00 AM
    cron.schedule('0 3 * * 0', async () => {
        try {
            console.log('Cron job started for updating profiles');
            await updateProfiles();
            console.log('Cron job completed for updating profiles');
        }
        catch (error) {
            console.error(error);
        }
    });
    // Every day at 6:00 PM  - '0 18 * * 1-5'
    cron.schedule('*/2 * * * *', async () => {
        try {
            console.log('Cron job started for updating history');
            await runHistoricalSync();
            console.log('Cron job completed for updating history');
        }
        catch (error) {
            console.error(error);
        }
    });
};
//# sourceMappingURL=scheduler.js.map