const express = require('express')
const bodyParser = require("body-parser")
const ejs = require('ejs')
const axios = require('axios')
const { response } = require('express')
const port= process.env.PORT || 3000

// requiring router...
const router= require('./route')

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static("public"));
     
app.use(router)

app.listen(port, function() {
    console.log("Server started on port 3000");
});
  
