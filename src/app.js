import express from "express";
import cors from 'cors';
import AuthRoutes from './routes/common/AuthRoutes.js';
import AuthorBlogManagementRoutes from './routes/author/AuthorBlogManagementRoutes.js';
import ReaderBlogManagementRoutes from './routes/reader/ReaderBlogManagementRoutes.js';
import LikesAndCommentsManagementRoutes from './routes/reader/LikesAndCommentsManagementRoutes.js';

const app = express();

app.use(cors({
    origin : "http://localhost:5173",
    credentials : true
}));
app.use(express.json());

app.use(AuthRoutes);
app.use(AuthorBlogManagementRoutes);
app.use(ReaderBlogManagementRoutes);
app.use(LikesAndCommentsManagementRoutes);

export default app;