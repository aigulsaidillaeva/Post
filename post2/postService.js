const db = require('../utils/db');
const logger = require('../utils/logger');


class PostService{
  
   async create(title, content) {
    const created = await db.query(
      'INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *',
      [title, content]
    );
    return created.rows[0]; 
  }

  async getAll(){

    try {
        const {rows} = await db.query('SELECT * FROM posts', []);
        return rows
    } catch (error) {
        logger.error('PostService getAll error', error.message);
        return false
    }
  }

  async getById(id){
    try {
        const {rows}=await db.query('SELECT * FROM posts  WHERE id=$1',[id])
        return rows[0]
    } catch (error) {
        logger.error('PostService getById error', error.message);
        return false
    }
  }

async update(id,title,content){
    try {
        const {rows}=await db.query('UPDATE posts SET title=$1, content=$2 WHERE id=$3 RETURNING *',[title,content,id])
        return rows[0]
    } catch (error) {
        logger.error('PostService update error', error.message);
        return false
        
    }
}

async delete(id){
try {
    const {rows}=await db.query('DELETE FROM posts WHERE id=$1 RETURNING *',[id])
    return rows[0]
} catch (error) {
    logger.error('PostService delete error', error.message);
    return false
}
}
}
module.exports = new PostService(); 