//APPROACH 1
// import dotenv from "dotenv";
// dotenv.config();
// import mongoose from "mongoose"
// import {DB_NAME} from "./constants.js"
// import express from "express"

// const app = express()

// ;(async() => {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error", (error) => {
//             console.log("\nERRR : ",error);
            
//         });
//         app.listen(process.env.PORT, () => {
//                 console.log(`App is running on port : ${process.env.PORT}`)
//             })
//     }
//     catch(error){
//         console.log("Database connection failed", error)
//     }
// })()
        


//APPROACH 2
import dotenv from "dotenv"
import {app} from "./app.js"

dotenv.config({path : './.env'})

import connectDB from "./db/index.js"

const serverStart = async () => {
    try {
        await connectDB();
        const server = app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })

        server.on("error", (error) => {
            console.log("Server Error : ", error.message);
            process.exit(1);
        });
    }catch(error){
        console.log("Startup Error : ", error.message);
    }
};

serverStart();
