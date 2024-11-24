const { Router } = require('express');
const router = Router();

const { storeInstrumentos } = require("../controller/instrumentosController");

router.post('/store/cadastroInstrumentos', storeInstrumentos);

module.exports = router;
