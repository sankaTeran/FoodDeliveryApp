import mongoose from "mongoose";

// DB Connection

export const connectDB = async () => {
    const uri = 'mongodb+srv://Pro8960:Ban8960%23%25@cluster0.3ngvt.mongodb.net/Cluster0?retryWrites=true&w=majority';
    
    try {
        await mongoose.connect(uri);
        console.log("DB Connected");
    } catch (error) {
        console.error("DB Connection Error: ", error);
    }
}


