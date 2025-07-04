import express from 'express';
const router = express.Router();
import {createPost, deletePost, getAllPosts,getSinglePost, updatePost} from '../controllers/post.controller.js'

router.post("/createpost",createPost)
router.get("/getPosts",getAllPosts)
router.get("/getSinglePost",getSinglePost)
router.delete("/deletePost",deletePost)
router.put("/updatePost",updatePost)


export default router;