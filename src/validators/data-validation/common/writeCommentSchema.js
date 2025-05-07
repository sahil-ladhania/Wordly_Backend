import { z } from "zod";

export const writeCommentSchema = z.object({
    comment : z
        .string()
        .trim()
        .min(10 , "Comment must be at least 2 characters !!!")
        .max(500 , "Comment must be at most 500 characters !!!")
})