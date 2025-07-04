import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    topic:{
        type:String,
        required:[true,"Topic is required"],
        min:[4,"atleast 4 characters"]
    },
    question:{
        type:String,
        required:[true,"Question is required"]
    },
    answer:{
        type:String,
        required:[true,"Answer is required"]
    },
})

const model= mongoose.model("QuestionPost",postSchema)
export default model;