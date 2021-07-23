var express = require('express');


var app = express();

const port = process.env.PORT || 80;

app.get('/', (req, res) => {
  res.send("teste!");
});

server.listen(port);
