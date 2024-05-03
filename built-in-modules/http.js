var http=require('http');

http.createServer(function (req ,res){
res.writeHead(200,{'content-type':'text/html'});
res.write(req.url);  //it saves url data after the domain name
res.end(); 

}).listen(4000);



