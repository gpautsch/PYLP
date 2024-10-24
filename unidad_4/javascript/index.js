
const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use('/', express.static(__dirname + '/public'));

app.get("/", (req, res) => {
  // res.send("");
});

app.listen(port, () => console.log(`Servidor escuchando ${port}!`));
