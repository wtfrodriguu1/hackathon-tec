const path = require('path');
const connection = require('../config/db'); // Certifique-se de que o caminho está correto

async function storeVideo(request, response) {
    try {
        // Verifica se o vídeo foi enviado
        const file = request.file; // Pegue o arquivo enviado
        console.log('Arquivo enviado:', file);

        if (!file) {
            return response.status(400).json({
                success: false,
                message: 'Nenhum arquivo enviado.',
            });
        }

        // Salve o caminho do arquivo no banco de dados
        const filePath = path.join('uploads', file.filename); // Caminho relativo para o arquivo salvo
        const query = 'INSERT INTO videos (video) VALUES (?)';
        const params = [filePath];

        connection.query(query, params, (err, results) => {
            if (err) {
                console.error('Erro ao salvar vídeo no banco de dados:', err);
                return response.status(500).json({
                    success: false,
                    message: 'Erro ao salvar vídeo no banco de dados.',
                    error: err,
                });
            }

            console.log('Vídeo salvo no banco de dados:', results);
            return response.status(201).json({
                success: true,
                message: 'Vídeo salvo com sucesso!',
                filePath: filePath, // Retorne o caminho do arquivo
                data: results,
            });
        });

    } catch (error) {
        console.error('Erro no servidor:', error);
        return response.status(500).json({
            success: false,
            message: 'Erro interno do servidor.',
            error: error.message,
        });
    }
}

module.exports = {
    storeVideo
};
