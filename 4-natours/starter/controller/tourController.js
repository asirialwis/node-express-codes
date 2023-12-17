const fs = require('fs');
const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`))

exports.getAllTours = (req,res)=>{
    res.
    status(200).
    json({status:'sucess',
    result:tours.length,
    GetTime:req.requestTime,
    data:{tours:tours}})
}


//Post request
exports.createTour = (req,res)=>{
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
exports.getTour = (req,res)=>{
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
exports.updateTour = (req,res)=>{
    console.log(req.params);
    const id  = req.params.id * 1;

    if(id> tours.length){
        return res.status(404).json({status:'fail',reason:'Invalid ID'})
    }
    res.status(200).json({status:'success',data:{tour:'<updated...>'}})
}


//Delete
exports.deleteTour = (req,res)=>{
    console.log(req.params);
    const id  = req.params.id * 1;
    if(id> tours.length){
        return res.status(404).json({status:'fail',reason:'Invalid ID'})
    }
    res.status(204).json({status:'success',data:null});
}