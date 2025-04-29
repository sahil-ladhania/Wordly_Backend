import express from 'express';
import { deleteBlogController, getAuthorBlogController, getAuthorBlogsController, updateBlogController, writeBlogController } from '../../controllers/author/AuthorBlogManagementControllers.js';
const router = express.Router();

router.post('/write-blog', writeBlogController);
router.put('/update-blog', updateBlogController);
router.delete('/delete-blog', deleteBlogController);
router.get('/author-blog/:blogId', getAuthorBlogController);
router.get('/author-blogs', getAuthorBlogsController);

export default router;