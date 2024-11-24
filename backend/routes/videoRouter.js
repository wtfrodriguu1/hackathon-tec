const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { storeVideo } = require('../controller/videoController');

// Criação da pasta de uploads, caso não exista
const uploadPath = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
}

// Configuração do multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadPath); // Define onde os arquivos serão salvos
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Define o nome do arquivo
    }
});

const upload = multer({ storage: storage });

const router = express.Router();

// Rota para salvar o vídeo
router.post('/save', upload.single('video'), storeVideo);

module.exports = router;
