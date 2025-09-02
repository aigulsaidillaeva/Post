const { Router } = require('express'); // должно быть express, а не router
const postController = require('./postController');

const router = Router();

router.post('/posts', postController.create);
router.get('/posts', postController.getAll);
router.get('/posts/:id', postController.getById);
router.put('/posts/:id', postController.update);
router.delete('/posts/:id', postController.delete);

module.exports = router;
