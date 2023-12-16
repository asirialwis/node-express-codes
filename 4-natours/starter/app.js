const express  = require('express')
const app = express()
const fs = require('fs');
const morgan = require('morgan');

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))

// Middlewares
app.use(express.json());
app.use(morgan('dev'));

app.use((req,res,next)=>{
    console.log('Hello From The MiddleWare');
    next();
})
app.use((req,res,next)=>{
    req.requestTime = new Date().toISOString();
    next();
})

const getAllTours = (req,res)=>{
    res.
    status(200).
    json({status:'sucess',
    result:tours.length,
    GetTime:req.requestTime,
    data:{tours:tours}})
}


//Post request
const createTour = (req,res)=>{
    const newId = tours[tours.length-1].id +1;
    const newTour = Object.assign({id: newId},{
        name: "Jaffna Tour",
        duration: 5,
        difficulty: "hard"
    });

    tours.push(newTour)
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,JSON.stringify(tours),err=>{
        res.status(201).json({status:"sucess",data:tours.length,
        data:{tour:newTour}})
    })
    
}

//get request
const getTour = (req,res)=>{
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
}


//patch
const updateTour = (req,res)=>{
    console.log(req.params);
    const id  = req.params.id * 1;

    if(id> tours.length){
        return res.status(404).json({status:'fail',reason:'Invalid ID'})
    }
    res.status(200).json({status:'success',data:{tour:'<updated...>'}})
}


//Delete
const deleteTour = (req,res)=>{
    console.log(req.params);
    const id  = req.params.id * 1;
    if(id> tours.length){
        return res.status(404).json({status:'fail',reason:'Invalid ID'})
    }
    res.status(204).json({status:'success',data:null});
}


const getAllUsers = (req,res)=>{
    res.status(500).json({status:'error',message:'route is not defined'})
}

const createUser = (req,res)=>{
    res.status(500).json({status:'error',message:'route si not defined'})
}
const getUser = (req,res)=>{
    res.status(500).json({status:'error',message:'route si not defined'})
}
const updateUser = (req,res)=>{
    res.status(500).json({status:'error',message:'route si not defined'})
}
const deleteUser = (req,res)=>{
    res.status(500).json({status:'error',message:'route is not defined'})
}


// app.get('/api/v1/tours',getAllTours);
// app.get('/api/v1/tours/:id',getTour);
// app.post('/api/v1/tours',createTour);
// app.patch('/api/v1/tours/:id',updateTour);
// app.delete('/api/v1/tours/:id',deleteTour);

app
    .route('/api/v1/tours')
    .get(getAllTours)
    .post(createTour);

app
    .route('/api/v1/tours/:id')
    .get(getTour)
    .patch(updateTour)
    .delete(deleteTour)

app.route('/api/v1/users').get(getAllUsers).post(createUser)
app.route('/api/v1/users/:id').get(getUser).patch(updateUser).delete(deleteUser)


app.listen(5000 , (req,res)=>{
    console.log("App running on port 5000")
})



