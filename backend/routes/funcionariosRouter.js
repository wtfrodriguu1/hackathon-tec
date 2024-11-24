const { Router } = require('express');
const router = Router();

const { storeFuncionarios } = require("../controller/funcionariosController");

router.post('/store/cadastroFuncionarios', storeFuncionarios);

module.exports = router;