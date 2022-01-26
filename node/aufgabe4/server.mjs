import { createServer } from 'http';
import { readFile } from 'fs';


readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    createServer(function(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write("<h1>"+ "insert params here" + "<h1>");  
        response.end();  
    }).listen(8080);
});