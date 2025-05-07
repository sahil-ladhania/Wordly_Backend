import { z } from "zod";

export const writeBlogSchema = z.object({
    imageLink: z
        .union([
            z.string().trim().url("Image Link must be a valid URL !!!"),
            z.literal(""),
        ])
        .optional(),
    title : z 
        .string()
        .trim()
        .min(30 , "Title must be at least 30 characters !!!")
        .max(200 , "Title must be at most 200 characters !!!"),
    content : z
        .string()
        .trim()
        .min(500 , "Content must be at least 500 characters !!!")
        .max(5000 , "Content must be at most 5000 characters !!!"),
});