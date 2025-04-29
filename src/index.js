import app from "./app.js";
import dotenv from 'dotenv';

dotenv.config();

const PORT = 3000;

app.listen(PORT , () => {
    console.log("Server Running on PORT : " , PORT);
})