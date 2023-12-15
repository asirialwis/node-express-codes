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

//Post request
app.post('/api/v1/tours',(req,res)=>{
    const newId = tours[tours.length-1].id +1;
    const newTour = Object.assign({id: newId},{
        name: "Galle Tour",
        duration: 2,
        difficulty: "hard"
    });

    tours.push(newTour)
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,JSON.stringify(tours),err=>{
        res.status(201).json({status:"sucess",data:tours.length,
        data:{tour:newTour}})
    })
    
})

//get request
app.get('/api/v1/tours/:id',(req,res)=>{
    console.log(req.params);
    const id  = req.params.id * 1;

    if(id> tours.length){
        return res.status(404).json({status:'fail',reason:'Invalid ID'})
    }


    const tour = tours.find(el=>el.id===id)
    res.
    status(200).
    json({status:'sucess',data:{tour}
    })
})

app.listen(5000 , (req,res)=>{
    console.log("App running on port 5000")
})

//patch
app.patch('/api/v1/tours/:id',(req,res)=>{
    console.log(req.params);
    const id  = req.params.id * 1;

    if(id> tours.length){
        return res.status(404).json({status:'fail',reason:'Invalid ID'})
    }
    res.status(200).json({status:'success',data:{tour:'<updated...>'}})
})

//Delete
app.delete('/api/v1/tours/:id',(req,res)=>{
    console.log(req.params);
    const id  = req.params.id * 1;
    if(id> tours.length){
        return res.status(404).json({status:'fail',reason:'Invalid ID'})
    }
    res.status(204).json({status:'success',data:null});
})