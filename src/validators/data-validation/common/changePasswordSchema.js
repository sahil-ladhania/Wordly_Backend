import { z } from "zod";
import { passwordSchema } from "./passwordSchema.js";

export const changePasswordSchema = z.object({
    currentPassword : passwordSchema,
    newPassword : passwordSchema,
    confirmNewPassword : passwordSchema,
})
.refine((date) => date.newPassword === date.confirmNewPassword , {
    message: "New Password and Confirm Password do not match !!!",
    path: ["confirmNewPassword"],
})
.refine((data) => (data.currentPassword !== data.newPassword) , {
    message: "New Password must be different from Current Password !!!",
    path: ["newPassword"],
});