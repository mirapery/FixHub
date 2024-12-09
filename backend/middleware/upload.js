const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');

const storage = new GridFsStorage({
    url: process.env.MONGODB_URI,
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, file) => {
       const match = ["image/png", "image/jpeg", "image/jpg"];
       
       if (match.indexOf(file.mimetype) === -1) {
          const filename = `${Date.now()}-picture-${file.originalname}`;
          return filename;
       }

       return {
          bucketName: "pictures",
          filename: `${Date.now()}-picture-${file.originalname}`
       };
    }
    });

module.exports = multer({ storage });