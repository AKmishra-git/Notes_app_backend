import mongoose from "mongoose"

export default async function connectToDB(){
   try{
    await mongoose.connect(process.env.MONGO_URI);

    console.log("connected to database");
    

   } catch(err){
     console.error("❌ DB Connection Failed:", error.message);
     process.exit(1);
   }

    
}