const express = require('express');
const router = express.Router();
const uploadController = require('../controller/uploadController')
const upload = require('../db/multer')

// basado en los HTTP Methods https://developer.mozilla.org/es/docs/Web/HTTP/Methods
router.post("/", upload.single('fileName') , uploadController.uploadHandler);

module.exports = router;