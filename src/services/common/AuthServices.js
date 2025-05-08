import prisma from "../../db/DB.js";
import { comparePassword } from "../../utils/authHelpers/ComparePassword.js";
import { generate_jwt } from "../../utils/authHelpers/GenerateJWT.js";

export const signupService = async({ firstName , lastName , email , phone , password , role }) => {
    try{
        const newUser = await prisma.user.create({
            data : {
                firstName : firstName,
                lastName : lastName,
                email : email,
                phone : phone,
                password : password,
                role : role
            }
        })
        return newUser;
    }
    catch(error){
        throw new Error('Error Signing Up : ' + error.message + error.stack);
    }
}

export const loginService = async({ email , password }) => {
    try{
        const user = await prisma.user.findUnique({
            where : {
                email : email
            }
        })
        if(!user){
            return null;
        }

        const ifPasswordValid = await comparePassword(password , user.password);
        if(!ifPasswordValid){
            return null;
        }

        const jwt = await generate_jwt(user.userId , user.firstName , user.email , user.role);
        
        const User = {
            user : user,
            jwt : jwt
        }

        return User;
    }
    catch(error){
        throw new Error('Error Logging In...' + error.message + error.stack);   
    }
}

export const forgotPasswordService = async(req , res , next) => {
    try{
        
    }
    catch(error){
        
    }
}

export const changePasswordService = async(req , res , next) => {
    try{
        
    }
    catch(error){
        
    }
}

export const logoutService = async(req , res , next) => {
    try{
        
    }
    catch(error){
        
    }
}
