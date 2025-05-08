import express from 'express';
import { commentController, dislikeController, getCommentsController, getLikesAndDislikesController, likeController } from '../../controllers/reader/LikesAndCommentsManagementControllers.js';
const router = express.Router();

router.post('/like-blog/:blogId', likeController);
router.post('/dislike-blog/:blogId', dislikeController);
router.post('/comment/:blogId', commentController);
router.get('/likes-and-dislikes/:blogId', getLikesAndDislikesController);
router.get('/comments/:blogId', getCommentsController);

export default router;