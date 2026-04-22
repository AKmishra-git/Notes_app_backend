import dotenv from "dotenv"
import app from "./src/app.js"
import connectToDB from "./src/config/database.js"

dotenv.config();

connectToDB()
app.listen(8000, ()=>{
    console.log("server started");
})


