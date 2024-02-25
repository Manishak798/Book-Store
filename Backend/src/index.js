import express, { urlencoded } from "express";
import { PORT, mongodbURL } from "./config.js";
import mongoose from "mongoose";
import cors from "cors";
import Route from "./Routes/Route.js";
import path from 'path';

const app = express();

// //static files
// app.use(express.static(path.join(__dirname, './Frontend/BookStoreFrontend/dist')));

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, './Frontend/BookStoreFrontend/dist/index.html'))
// })

//cors allow all
app.use(cors());//we use this because our localhost id is diff in frontend
//cors with option what i want to allow my forntend to use
// app.use(cors({
//     origin: 'http://localhost:8000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type']
// }))
app.use(urlencoded({ extended: false }));//if we dont use this our body will not be readed
//connection 
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    next();
});

//routes
app.use("/books", Route);
//dbconnection
mongoose.connect(mongodbURL)
    .then(() => {
        console.log("Mongodb Connected");
    })
    .catch((error) => {
        console.log("Mongo DB", error);
    })

//reqlistening
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
})