const { Router } = require('express');
const { storeCadastro, verificarEmailRota } = require('../controller/cadastroController');
const router = Router();


// Rota para o cadastro
router.post("/cadastrar", storeCadastro);


module.exports = router;
