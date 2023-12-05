const http = require('http');

const server = http.createServer((req,res)=>{
   // console.log(req);
   if(req.url === '/'){
    res.end(`<h1>welcome to our home page</h1>`);
   }
   else if(req.url ==='/about'){
    res.end(`<h1>This is Our about page</h1>`)
   }
   else{
    res.end(`<h1>OOPs! error</h1>
    <p>we can't find the page you are looking for</p>`)
   }

})
server.listen(5000);