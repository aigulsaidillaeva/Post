const db = require('../utils/db');
const { sendSuccess, sendError } = require('../utils/send');
const postService = require('./postService');

class PostController {
 async create(req, res) {
    try {
      const { title, content } = req.body;
      const data = await postService.create(title, content);
      if (data) return sendSuccess(res, data, 'Success');
      return sendError(res, 'Error');
    } catch (err) {
      return sendError(res, err.message);
    }
  } 

  async getAll(req, res) {
    const data =await postService.getAll()
    if (data) return sendSuccess(res, data, 'Success');
    return sendError(res, 'Error');
  }

  async getById(req,res){
    const {id}=req.params
    const data =await postService.getById(id)
    if(data) return sendSuccess(res,data,'Success' )
    return sendError(res,'Error')
  }

  async update(req,res){
    const {id}=req.params
    const {title,content}=req.body
    const data =await postService.update(id,title,content)
    if(data) return sendSuccess(res,data,'Success' )
    return sendError(res,'Error')
  }

  async delete(req,res){
    const{id}=req.params
    const data=await postService.delete(id)
    if(data) return sendSuccess(res,data,'Success' )
    return sendError(res,'Error')
  }

}

module.exports = new PostController();