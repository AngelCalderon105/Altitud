import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
    try {
        // Asserting that MONGODB_URI is a string
        const dbUri = process.env.MONGODB_URI as string;
        await mongoose.connect(dbUri);
        console.log('Database connection successful');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

export default connectDB;
