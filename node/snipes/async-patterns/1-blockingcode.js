const http = require('http')

const server = http.createServer((req ,res)=>{
    if(req.url === '/'){
        res.end(`<h1>Welcome to our home page</h1><a href="/about">back aboutus</a>`)
        return
    }
    if(req.url === '/about'){
        //blocking the load about page , Thats an example why we need asyncronus code
        for( let i =0; i <1000; i++){
            for(let j =0; j<1000; j++){
                console.log(`${i} ${j}`)
            }
        }
        res.end(`<h1>here is our short history</h1><a href="/">back home</a>`)
        return 
    }
    res.end(`
    <h1>OOPS!</h1>
    <p>we can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
})

server.listen(5000,() =>{
    console.log('server listening on port 5000')
})


