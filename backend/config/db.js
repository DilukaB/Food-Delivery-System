import mongoose from "mongoose";

export const connectDB =async()=>{
    await mongoose.connect('mongodb+srv://Lukedb:1413087Luki@cluster0.qc0tk.mongodb.net/food').then(()=>console.log("DB Connected"));
}