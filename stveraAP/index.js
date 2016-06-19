const express = require('express');
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length; //from example 
const app = express();
console.log(`worker stevera is super`);

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile( __dirname + "/public/" + "index.html" );
});

app.get('/', function (req, res) {
  res.sendFile( __dirname + "/public/" + "michaelkors.html" );
});

app.get('/', function (req, res) {
  res.sendFile( __dirname + "/public/" + "baglove.html" );
});

app.get('/', function (req, res) {
        res.send('Example app listening on port 5000!');
});

/*if (cluster.isMaster) {
  // Fork workers.
 
  for (var i = 0; i < numCPUs; i++) {
  	cluster.fork();
  }   

 /*  not sure if necessary

   worker.on('exit', (code, signal) => {
    if( signal ) {
      console.log(`worker was killed by signal: ${signal}`);
    } 
    else if( code !== 0 ) {
      console.log(`worker exited with error code: ${code}`);
    } 
    else {
      console.log('worker success!');
     }
    });

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  }); 

} 
else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
 /* http.createServer((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
  }).listen(8000);
  */
    // Add a basic route – index page
/*  

    // Bind to a port
    var serve = app.listen(8000, function(){

    };
    console.log('Application running!');
}
*/

