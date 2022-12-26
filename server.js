var http = require('http');

var serve = http.createServer(function(req,res){
    if (req.url=='/') {
        res.writeHead(200,{ 'Content-Type': 'text/html'})
        res.write('<html><body><p>This is home Page.</p></body></html>');
        res.end();
    }else{
        res.end('Invalid Request!');
    }
});

serve.listen(8000);

console.log('the server run in port 8000');