var multer = require('multer');
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const {
    CLOUD_NAME,
    API_KEY,
    API_SECRET
} = require('../config');

cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: API_KEY,
    api_secret: API_SECRET
});

// Uploading Image Configuration
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "ponekedrag",
        allowedFormats: ["jpg", "png"],
        transformation: [
            { if: "w_gt_1900", width: 1900, crop: "scale" },
            { if: "h_gt_1900", height: 1900, crop: "scale" },
            { quality: "auto" },
            { format: 'jpg' }
        ]
    }
});

const parser = multer({ storage: storage });

module.exports = {
    parser
};

