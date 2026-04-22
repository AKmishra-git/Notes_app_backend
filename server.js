import dotenv from "dotenv";
import app from "./src/app.js";
import connectToDB from "./src/config/database.js";

dotenv.config();

const PORT = process.env.PORT || 8000;

connectToDB()
  .then(() => {
    console.log("DB connected");

    app.listen(PORT, () => {
      console.log(`server started on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("DB connection failed:", err);
  });

