
const mongoose = require("mongoose");
const MONGO_URI = "mongodb://localhost:27017/shopping";
const connectDB = async()=>{
    try{
        const conn = await mongoose.connect(MONGO_URI,{
            useUnifiedTopology : true,
            useNewUrlParser : true,
            useCreateIndex : true

        })
        console.log(`MongoDB Connected ${conn.connection.host}`.yellow)
    }
    catch(error){
        console.error(`Error : ${error.message}`);
        process.exit(1);
    }
};
module.exports = connectDB;
