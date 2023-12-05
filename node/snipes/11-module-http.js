// const http = require('http');

// const server = http.createServer((req,res)=>{
//    // console.log(req);
//    if(req.url === '/'){
//     res.end(`<h1 >welcome to our home page</h1>`);
//    }
//    else if(req.url ==='/about'){
//     res.end(`<h1>This is Our about page</h1>`)
//    }
//    else{
//     res.end(`<h1>OOPs! error</h1>
//     <p>we can't find the page you are looking for</p>`)
//    }

// })
// server.listen(5000);



const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    if (req.url === '/') {
        res.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Your Node.js App</title>
                <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
            </head>
            <body class="container">
                <h1 class="display-3">Welcome to our home page</h1>
            </body>
            </html>
        `);
    } else if (req.url === '/about') {
        res.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Your Node.js App</title>
                <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
            </head>
            <body class="container">
                <h1 class="display-3">This is Our about page</h1>
            </body>
            </html>
        `);
    } else {
        res.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Your Node.js App</title>
                <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
            </head>
            <body class="container">
                <h1 class="display-3">OOPs! error</h1>
                <p class="lead">We can't find the page you are looking for</p>
            </body>
            </html>
        `);
    }

    res.end();
});

server.listen(5000);
