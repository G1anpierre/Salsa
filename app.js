const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('home');
});


app.listen(3000, function(){
    console.log('App has started');
});

