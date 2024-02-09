import mongoose from "mongoose";

const MONGODB_URI = 'mongodb+srv://angelcalderon105:crsuiVSN3M4dS2v4@cluster0.pnxrdfi.mongodb.net/altitud-contact-form'
const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Database connection successful');
    } catch (error) {
        console.log('Error connecting to MongoDB:', error);
    }
};

export default connectDB;
//
