import { loginService, signupService } from "../../services/common/AuthServices.js";
import { hashPassword } from "../../utils/authHelpers/HashingPassword.js";
import { checkIfUserExist } from "../../validators/ownership-validation/common/CheckIfUserExist.js";

export const signupController = async(req , res , next) => {
    try{
        const {
            firstName,
            lastName,
            email,
            phone,
            password,
            role
        } = req.body;

        if(!firstName || 
            !lastName || 
            !email || 
            !phone || 
            !password || 
            !role)
        {
            return res.status(400).send({
                statusCode : 400,
                statusMessage : "Bad Request",
                message : "Please Fill All Required Feilds !!!"
            });
        }

        const hashedPassword = await hashPassword(password);

        const ifUserExist = await checkIfUserExist({ email });

        if(!ifUserExist){
            const newUser = await signupService({ firstName , lastName , email , phone , password : hashedPassword , role });
            return res.status(201).send({
                statusCode : 201,
                statusMessage : "Created",
                message : "User Signup Successfull !!!",
                newCreatedUser : newUser
            })
        }
        else{
            return res.status(400).send({
                statusCode : 400,
                statusMessage : "Bad Request",
                message : "User Already Exist !!!"
            });
        }
    }
    catch(error){
        next(error);
    }
}

export const loginController = async(req , res , next) => {
    try{
        const {
            email,
            password, 
        } = req.body;

        if(!email || 
            !password
        )
        {
            return res.status(400).send({
                statusCode : 400,
                statusMessage : "Bad Request",
                message : "Please Fill All Required Feilds !!!"
            });
        }

        const { user , jwt } = await loginService({email , password});
        
        if(!user){
            return res.status(400).send({
                statusCode : 400,
                statusMessage : "Bad Request",
                message : "Invalid Credentials !!!"
            })
        }

        res.cookie("jwt" , jwt , {
            maxAge : 3600000, 
            httpOnly : true , 
            path: '/', 
            sameSite : 'Lax' , 
            secure : false
        })

        return res.status(200).send({
            statusCode : 200,
            statusMessage : "OK",
            message : "User Login Successfull !!!",
            existingUser : user
        })
    }
    catch(error){
        next(error);
    }
}

export const forgotPasswordController = async(req , res , next) => {
    try{
        
    }
    catch(error){
        next(error);
    }
}

export const changePasswordController = async(req , res , next) => {
    try{
        
    }
    catch(error){
        next(error);
    }
}

export const logoutController = async(req , res , next) => {
    try{
        
    }
    catch(error){
        next(error);
    }
}
