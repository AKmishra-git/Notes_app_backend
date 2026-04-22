import express from "express"
import noteRoutes from "./routes/notes.routes.js"
import cors from "cors"

const app = express();

app.use(express.json())

app.use(cors({
  origin: ["http://localhost:3000",
    "https://crudalgo.netlify.app/"
  ],
   
  credentials: true
}))

app.get("/", (req, res) => {
  res.send("Server is working");
});
app.use("/api/notes", noteRoutes)

export default app
