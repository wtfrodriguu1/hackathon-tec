const connection = require('../config/db');
const dotenv = require('dotenv').config();
 
async function storeCategoriakits(request, response) {
 
// recuperando fromulario
    const params = Array(
        request.body.nome
    );

const query = "insert into categoriakits(nome) Values(?)";

connection.query(query, params, (err, results) => {
    console.log(err, results);
    if(results) {
        response
        .status(201)
        .json({
            success: true,
            message: "sucesso",
            data: results
        })
    } else{
        response
        .status(400)
        .json({
            success: false,
            message: "ops, deu problema!",
            data: err
        })
    }
})
}
 
module.exports = {
    storeCategoriakits
}