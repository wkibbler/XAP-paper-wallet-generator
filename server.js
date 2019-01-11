const express = require('express');
const app = express();

const server = app.listen(7000, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});

app.use('/public', express.static(__dirname + '/public'));
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

/*
app.get('/', (req, res) => {
  res.render('index');
});

app.set('view engine', 'ejs');
*/
