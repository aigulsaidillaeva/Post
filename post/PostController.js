import PostService from "./PostService.js";

class PostController{

    async create(req,res){
  try {
       const post =await PostService.create(req.body)
    
    res.json(post)
    } catch (error) {
    res.status(500).json(error.message)

        
    }
    }

    async getAll(req,res){
        try {
            const getPosts=await PostService.getAll()
            res.json(getPosts)
        } catch (error) {
     res.status(500).json(error.message)

        }
    }

    async getOne(req,res){
        try {       
           
            const post=await PostService.getOne(req.params.id)
            res.json(post)
        } catch (error) {
        res.status(500).json(error.message)


        }
    }

    async update(req,res){ 
        try {
            const updatedPost=await PostService.update(req.body)
            return res.json(updatedPost)
            
        } catch (error) {
           res.status(500).json(error.message)

        }}

    async delete(req,res){
         try {
         
            const post=await PostService.delete(req.params.id)
            return res.json(post)
        } catch (error) {
            res.status(500).json(error.message)

        }
    }
}

export default new PostController()