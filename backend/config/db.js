import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://mohammedshaikh:Prime_Fresh_MP1@cluster0.oehmb.mongodb.net/Prime_Fresh_MP')
    .then(()=>console.log("DB Connected"));
}


