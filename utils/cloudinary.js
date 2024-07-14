import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dbt8yugrw",
  api_key: "865967281437633",
  api_secret: "qccBhzifZ8gDvgooKHMujKTPPxE",
});

export const uploadOnCloudinary = async (path) => {
  try {
    const response = await cloudinary.uploader.upload(path, {
      resource_type: "auto",
    });
    return {
      urls: response.url,
      id: response.public_id,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};
