// config/db.js
import mongoose from "mongoose";

const db = process.env.MONGO_URI;

const Connection =()=>{
    //const MONGODB_URI="mongodb+srv://zainab:zainab@medbot.mk6xvyf.mongodb.net/?retryWrites=true&w=majority";
    const MONGODB_URI="mongodb+srv://medbot:a1b2c3d4e5@medbot.mk6xvyf.mongodb.net/?retryWrites=true&w=majority";
    mongoose.set("strictQuery", false);
    mongoose.connect(MONGODB_URI,{useNewUrlParser:true});
    mongoose.connection.on('connected',()=>{
        console.log('db connected successfully');
    })
    mongoose.connection.on('disconnected',()=>{
        console.log('db disconnect');
    })
    mongoose.connection.on('error',()=>{
        console.log('error');
    })
}
export default Connection;