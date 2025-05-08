import prisma from "../../../db/DB.js";

export const checkIfUserExist = async({ email }) => {
    try{
        const ifUserExist = await prisma.user.findUnique({
            where : {
                email : email
            }
        })
        return ifUserExist;
    }
    catch(error){
        throw new Error('Error Checking User Existence : ' + error.message + error.stack);
    }
}