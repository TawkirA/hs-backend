import mongoose from 'mongoose';
const mongoURL = process.env.MONGO_URI;
console.log('mongoURL - ', mongoURL);
const connectDB = async () => {
    try {
        await mongoose.connect(mongoURL, {
            maxPoolSize: 20,
            minPoolSize: 5
        });
        console.log('MongoDB connected!!!');
    }
    catch (error) {
        console.error('MongoDB connection failed', error);
        process.exit(1);
    }
};
export default connectDB;
//# sourceMappingURL=db_config.js.map