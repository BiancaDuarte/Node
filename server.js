var express =  require('express');
var app = express();
var port = '3000';

app.listen(port);
console.log('Servidor iniciado na porta '+port+'. Acesse: localhost '+port);