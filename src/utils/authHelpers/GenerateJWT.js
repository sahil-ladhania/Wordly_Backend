import jwt from 'jsonwebtoken';

export const generate_jwt = async(userId , firstName , email , role) => {
    try {
        const payload = {
            userId : userId,
            firstName : firstName,
            email : email,
            role : role
        }

        const secretKey = process.env.SECRET_KEY;

        const options = {
            expiresIn : "2h",
        }

        const jwt_token = jwt.sign(payload , secretKey , options);
        return jwt_token;
    }
    catch (error) {
        throw new Error(`Error Generating JWT : ${error.message}`);
    }
}