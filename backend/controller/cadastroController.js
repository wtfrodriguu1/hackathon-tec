const connection = require('../config/db');
const dotenv = require('dotenv').config();


// Cadastrar pessoa - POST
async function storeCadastro(request, response) {
    const { name, cpf, endereco, credencial, cargo } = request.body;

    try {
    
        // Se o e-mail não existir, continua o processo de cadastro
        const params = [name, cpf, endereco, credencial, cargo ];
        const query = "INSERT INTO funcionarios(nome, cpf, endereco, credencial, cargo ) VALUES(?,?,?,?,?)";
            console.log(params)
        connection.query(query, params, (err, results) => {
            if (err) {
                return response.status(400).json({
                    success: false,
                    message: "Ops, deu problema!",
                    data: err
                });
            }

            // Se o cadastro for bem-sucedido
            return response.status(201).json({
                success: true,
                message: "Cadastro realizado com sucesso!",
                data: results
            });
        });
    } catch (err) {
        console.error("Erro ao verificar e-mail ou cadastrar:", err);
        response.status(500).json({
            success: false,
            message: "Erro ao processar o cadastro. Tente novamente mais tarde.",
            data: err
        });
    }
}





module.exports = {
    storeCadastro
};
