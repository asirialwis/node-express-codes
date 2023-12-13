const express  = require('express')
const app = express()
const fs = require('fs')


app.use(express.json());
const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))
// app.get('/',(req,res)=>{
//     res.status(200).json({message:'Hello from the server side',app:'Natours'})
// })
app.get('/api/v1/tours',(req,res)=>{
    res.
    status(200).
    json({status:'sucess',
    result:tours.length,
    data:{tours:tours}})
})


app.post('/api/v1/tours',(req,res)=>{
    // console.log(req.body);
    const newId = tours[tours.length-1].id +1;
    const newTour = Object.assign({id: newId},req.body);

    tours.push(newTour)
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,JSON.stringify(tours),err=>{
        res.status(201).json({status:"sucess",data:tours.length,
        data:{tour:newTour}})
    })
    
})

app.listen(5000 , (req,res)=>{
    console.log("App running on port 5000")
})
