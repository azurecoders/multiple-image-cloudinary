import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import uploadRouter from "./routes/upload.route.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(() => console.log("DB Connected"));

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/uploads", uploadRouter);

app.listen(process.env.PORT, () => console.log("Server is Working"));
