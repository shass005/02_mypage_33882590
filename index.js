var http = require("http"); 
const port = 8000; 

http.createServer(function(req, res) { 
    console.log(req);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
        <!DOCTYPE html>
        <html>
         <title>MyPage</title>
         <style>
          body{
           background-color: black;
          }
          h1{
           color: white;
          }
          h2{
           color: white;
          }
          p{
           color: white;
          }   
         </style>
        <body>
         <h1>This is MyPage</h1>
         <h2>About Me:</h2>
         <p>I am an Undergraduate Computer Science student at Goldsmith University. This is my third and final year at Goldsmith...</p>
         <!--This is a comment-->
        </body>
       </html> 
        `);
    }).listen(port, function() { 
        console.log(`Node server is running on port ${port}...`); 
}); 
