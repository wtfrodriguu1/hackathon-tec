const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');

// Importação dos roteadores
const funcionariosRouter = require('./routes/funcionariosRouter');
const categoriakitsRouter = require('./routes/categoriakitsRouter');
const kitsRouter = require('./routes/kitsRouter');
const router = require('./routes/cadastroRouter');
const instrumentosRouter = require('./routes/instrumentosRouter');
const videoRouter = require('./routes/videoRouter'); // Corrigido para o roteador de vídeos

const app = express();

// Configurações do servidor
app.set('port', process.env.PORT || 3005);

// Middlewares globais
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/funcionarios', funcionariosRouter);
app.use('/api/categoriakits', categoriakitsRouter);
app.use('/api/kits', kitsRouter);
app.use('/api/instrumentos', instrumentosRouter);
app.use('/api', router);
app.use('/api/videos', videoRouter); // Adicionando a rota para vídeos

// Exportação do app
module.exports = app;
