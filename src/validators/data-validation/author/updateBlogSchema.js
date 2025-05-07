import { z } from "zod";
import { writeBlogSchema } from "./writeBlogSchema.js";

export const updateBlogSchema = writeBlogSchema.partial();