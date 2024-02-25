import mongoose from "mongoose";
//Book-Schema
const bookSchema = new mongoose.Schema({
    // _id: false, // <-- disable _id
    title: {
        type: String,
        required: true,

    },
    author: {
        type: String,
        required: true,
    },
    publishYear: {
        type: Number,
        required: true,
    },
},
    {
        timestamps: true,
    })
export default bookSchema;
