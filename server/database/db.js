import mongoose from "mongoose";

import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const connection = async() =>{
    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-0bnk2mi-shard-00-00.lrozfnl.mongodb.net:27017,ac-0bnk2mi-shard-00-01.lrozfnl.mongodb.net:27017,ac-0bnk2mi-shard-00-02.lrozfnl.mongodb.net:27017/?ssl=true&replicaSet=atlas-ql0dvv-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
       await mongoose.connect(URL,{ useUnifiedTopology:true})
       console.log('Database conneted successfully');
    } catch(error){
        console.log('error while connecting with database', error.message);
    }
}

export default connection;
