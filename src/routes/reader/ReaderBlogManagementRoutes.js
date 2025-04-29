import express from 'express';
import { getABlogController, getAllBlogsController, searchAndFilterBlogsController } from '../../controllers/reader/ReaderBlogManagementControllers.js';
const router = express.Router();

router.get('/blogs', getAllBlogsController);
router.get('/read-blog/:blogId', getABlogController);
router.get('/search-and-filter-blogs', searchAndFilterBlogsController);

export default router;