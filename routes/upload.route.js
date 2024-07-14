import express from "express";
import { upload } from "../middlewares/upload.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import fs from "fs";
import File from "../models/file.model.js";

const router = express.Router();

router.post("/file-upload", upload.array("files"), async (req, res) => {
  const uploader = async (path) => await uploadOnCloudinary(path, "Images");

  if (req.method == "POST") {
    const urls = [];

    const files = req.files;

    let newFile;

    for (const file of files) {
      const { path } = file;

      const newPath = await uploader(path);

      urls.push(newPath);

      fs.unlinkSync(path);
    }

    newFile = new File({ data: urls });
    await newFile.save();

    res.status(200).json({
      message: "Images uploaded successfully",
      response: newFile,
    });
  } else {
    res.status(400).json({
      success: false,
      message: "Failed to uplaod images",
    });
  }
});

export default router;
