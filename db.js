import mongoose from'mongoose'
 
async function connectDB() {
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connected successfuly")
    
    }catch(error){
        console.log("connection failed",error);
    }
    
}
export default connectDB;