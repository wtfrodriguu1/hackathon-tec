const connection = require('../config/db');
const dotenv = require('dotenv').config();
 
async function storeKits(request, response) {
 
// recuperando fromulario
    const params = Array(
        request.body.codigo,
        request.body.status,
        request.body.idcat
    );

const query = "insert into kits(codigo, status, idcat) Values(?,?,?)";

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
    storeKits
}