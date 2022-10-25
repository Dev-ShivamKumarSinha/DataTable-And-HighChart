var http = require('http');
var fs = require('fs');

const hostname = '127.0.0.1';
const port = 8080
http.createServer(function (req, res) {
    fs.readFile('Index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data)
        return res.end();
    });
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });