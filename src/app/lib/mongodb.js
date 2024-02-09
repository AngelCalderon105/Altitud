import mongoose from "mongoose";
 
const connectDB = async () => {
    try{
        if (mongoose.connection.readyState === 1) {
            await mongoose.connect(process.env.MONGODB_URI);
            console.log('db connected')
        }
    }
    catch(error){
        console.log(error);
    }
 };

 export default connectDB;