import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connection.mjs";

import userRoutes from "./routes/users.mjs";
import jobRoutes from "./routes/jobs.mjs";
import noteRoutes from "./routes/notes.mjs";


dotenv.config();


const app = express();

app.use(express.json());


app.get("/", (req, res) => {
  res.send("Job Tracker API Running");
});


app.use("/users", userRoutes);

app.use("/jobs", jobRoutes);

app.use("/notes", noteRoutes);


const PORT = process.env.PORT || 5050;


connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });