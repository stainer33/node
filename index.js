"use strict"
//var http = require ('http');
const express = require ('express')
//console.log(http);

//to create serve
//http.createServer();
const app = express();

//higher order function / callback function 
function cb(req, res)
{
    //for status code
    res.statusCode=401;
    //to end the processs
    res.end('this is homepage');
}
app.get('/response',cb);
//var application = http.createServer(cb);
//handle request

console.log('server running on 3090');
//assigning port 
app.listen(3090);