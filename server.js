const express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var multipart = require('connect-multiparty');


var multipartMiddelware = multipart();

//const authRoutes = require('./routes/auth-routes');

var port = process.env.PORT || 80;
const app = express();

app.use(bodyParser.json());
app.use(multipartMiddelware);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use('/public', express.static(__dirname+'/public'));
app.use('/node_modules', express.static(__dirname+'/node_modules'));

// set view engine
app.set('view engine', 'ejs');

// create home route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
});




app.listen(port, () => {
    console.log('Server is running on port', port);
});
