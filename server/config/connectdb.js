const mongoose = require("mongoose");


async function connectDB(){
    try {
        await mongoose.connect(process.env.MongoDB_URL);
        const connection  = mongoose.connection;
        connection.on("connected", ()=>{
            console.log("connected to DB")
        })
        connection.on("error", (error)=>{
            console.log("something is wrong", error);
            
        })
    } catch (error) {
        console.log('something is wrong', error)
    }
} 

module.exports = connectDB