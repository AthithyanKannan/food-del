import mongoose  from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://athithyan1314:6383001730@cluster0.x55x6.mongodb.net/food-del').then(()=> console.log("DB Connected"))
}