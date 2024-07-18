const mongoose = require("mongoose")
const express = require("express")


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL).then(()=> {console.log("DB Connected Successfully");})
        
    } catch (error) {
        console.log("DB Connection error : ", error);
    }
}

module.exports = connectDB
