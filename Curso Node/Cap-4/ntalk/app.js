var routes  = require('./routes');
var express = require('express');
var load    = require('express-load');
var app     = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', routes.index);
app.get('/usuarios', routes.user.index);

app.listen(3000, ()=>{
    console.log("Ntalk no ar");
});