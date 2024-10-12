import mongoose from "mongoose"


export const connectDB = async() =>{
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log("DB connection successful");
    } catch (error) {
        console.log(error);
        console.log("DB connection error");
    }
}