const cloudinary = require('cloudinary').v2
const path = require("path");
const fs = require("fs")
// console.log(path.resolve(__dirname, "../public/images"));


// const uploadOnCloudinary = async (localFilePath) => {
//     try {
//         if (!localFilePath) 
//             return null;
        
//         const fullPath = path.resolve(__dirname, "../public/images", localFilePath);
//         console.log(fullPath);
        
//         const response = await cloudinary.uploader.upload(fullPath, {
//             resource_type: "auto"
//         });
//         console.log("File is uploaded on cloudinary", response.url);
//         return response.url;
//     } catch (error) {
//         // fs.unlinkSync(fullPath); // remove the locally saved temporary file as the upload option got failed
//         return null;
//     }
// };s



const uploadOnCloudinary = async (localFilePath) => {

    // Configuration
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_SECRET_KEY
    });

    const fullPath = path.resolve(__dirname, "../public/images", localFilePath);
    
    // Upload an image
    const uploadResult = await cloudinary.uploader.upload(fullPath, {
        resource_type: "auto"
    })
    .catch((error)=>{
        fs.unlinkSync(fullPath); // remove the locally saved temporary file as the upload option got failed
        console.log(error)
    });
    
    // console.log(uploadResult);
    return uploadResult.url
    
      
};


module.exports = uploadOnCloudinary;
