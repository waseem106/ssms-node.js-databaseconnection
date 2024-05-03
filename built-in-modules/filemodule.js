var http =require('http');
var fs = require('fs');

http.createServer(function(req,res){
    fs.readFile('file.html',(err,data)=>{
        if (err) throw err; //if command is used myself to get notified if error occured , on choice
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        return res.end();


    });  //ending the arrow function with return
    
}).listen(4000);