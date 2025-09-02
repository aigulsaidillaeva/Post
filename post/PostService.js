import Post from './Post.js'
class PostService{

 async create(post){
     const createdPost =await Post.create(post)
     return createdPost
    }

async getAll( post){
       
            const getPosts=await Post.find(post)
         
            return getPosts
    }

    async getOne(id){
                   if(!id){
               throw new Error('Id not found')
            }
            const post=await Post.findById(id)
            return post    
    }

    async update(post){ 
               if(!post._id){
                throw new Error('Id not found')
            }
            const updatedPost=await Post.findByIdAndUpdate(post._id, post,{new:true})
            return updatedPost            
       }


    async delete(id){
        
            if(!id){ 
         res.status(400).json({message:'Id not found'})}
            const post=await Post.findByIdAndDelete(id)
                
}
}

export default new PostService()