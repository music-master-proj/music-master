const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `uploads/`)
  },
  filename: (req, file, cb) => {
    console.log(file);
    console.log(req.body);
    cb(null, `${file.originalname.split('.')[0]}-${Date.now()}.${file.mimetype.split('/')[1]}`)
  },
})

const imageFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(png|jpeg|jpg)$/)) {
    cb(new Error('Please upload an Image File'), false);
    return
  }
  cb(undefined, true)
};

// // Multer Image config
module.exports.uploadImage = multer({
  storage: storage,
  limits: {
    fileSize: 10000000 // 10000000 Bytes = 10 MB
  },
  fileFilter: imageFilter
})
