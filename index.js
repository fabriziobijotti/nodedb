const express = require('express');
const app = express();
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'otecnico-db.mysql.database.azure.com',
    user: 'otecnico',
    password: 'professor@2023',
    database: 'banco01',
});

connection.connect(function(error) {
    if (error) {
        console.log('Erro ao conectar no banco de dados:', error);
        return;
    }

    console.log('Conexão estabelecida com sucesso.');
});

app.get('/', function(req, res) {
    const sql = `INSERT INTO contatos (nome, telefone) VALUES ('Fabrizio', '17982209800')`;

    connection.query(sql, function(error, result) {
        if (error) {
            console.log('Erro ao executar a query:', error);
            return;
        }

        console.log('Registro inserido com sucesso.');
        res.send('Registro inserido com sucesso.');
    });
});

app.listen(3000, function() {
    console.log('Aplicação rodando na porta 3000.');
});