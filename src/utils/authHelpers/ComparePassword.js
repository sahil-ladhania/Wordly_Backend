import bcrypt from 'bcrypt';

export const comparePassword = async(password , hashedPassword) => {
    try {
        const ifPasswordMatch = await bcrypt.compare(password , hashedPassword);
        return ifPasswordMatch;
    } 
    catch (error) {
        throw new Error(`Error Comparing Password : ${error.message}`);
    }
}