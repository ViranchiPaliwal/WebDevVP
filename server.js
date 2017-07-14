var app = require('./express');
var express = app.express;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.static())
//
// app.set('view engine', 'ejs');
// require('./utilities/filelist');
//
 app.use(app.express.static(__dirname + '/public'));
//
require('./test/app');
//
app.listen(process.env.PORT || 7000);
// console.log("hello world");
// var express = require('express');
// var app = express();
// app.get('/hello',function (req,res) {
//     //res.send("hello from server.");
//     //console.log("hello from server.");
//     res.send({message: 'hello from server'})
// });

//var port = app.use(express.static(__dirname + '/public'));
//app.listen(3000 || port);

