const express = require('express');
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length; //from example 
const app = express();


console.log(`worker stevera is super died`);

if (cluster.isMaster) {

  for (var i = 0; i < numCPUs; i++) {
  	  // Fork workers
  	  var worker = cluster.fork();
  }
      
    worker.on('online', (worker) => {
      console.log(`worker with id`+ worker.process.pid+'is working');
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

} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
 /* http.createServer((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
  }).listen(8000);
  */
    // Add a basic route – index page
    app.get('/', function (req, res) {
        res.send('Hello World!');
    });

    // Bind to a port
    var serve = app.listen(8000, function(){
    	 console.log('Application running!');
    });
   
}


