import PostModel from "../models/post.model.js"

export const createPost = async(req,res,next)=>{

    const {topic ,question,answer} = req.body;

    const responseData =await new PostModel({
        topic,
        question,
        answer
    })
    await responseData.save();
    res.status(200).json({
        success:true,
        responseData
    })
    
}

export const getSinglePost= async (req,res,next)=>{
    const {postID} = req.query;
    const responseData = await PostModel.findById(postID)
    if(!responseData){
        return next("No Post available")
    }
    res.status(200).json({
        success:true,
        responseData
    })
}
export const getAllPosts= async (req,res,next)=>{
    
    const responseData = await PostModel.find({})
    if(!responseData){
        return next("No Post available")
    }
    res.status(200).json({
        success:true,
        responseData
    })
}

export const deletePost= async (req,res,next)=>{
    const {postID} = req.body;
    const responseData = await PostModel.findByIdAndDelete(postID)

    if(!responseData){
        return next("No data available for delete")
    }
    res.status(200).json({
        success:true,
        responseData
    })
}

export const updatePost= async (req,res,next)=>{
    const {postID,topic,question,answer} = req.body;
    const responseData = await PostModel.findByIdAndUpdate(postID,{
        topic,
        question,
        answer
    },{new:true})
    if(!responseData){
        return next("No Post available")
    }
    res.status(200).json({
        success:true,
        responseData
    })
}