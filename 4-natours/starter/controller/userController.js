const fs = require('fs');

const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`))

exports.getAllUsers = (req,res)=>{
    res.status(500).json({status:'error',message:'route is not defined'})
}

exports.createUser = (req,res)=>{
    res.status(500).json({status:'error',message:'route si not defined'})
}
exports.getUser = (req,res)=>{
    res.status(500).json({status:'error',message:'route si not defined'})
}
exports.updateUser = (req,res)=>{
    res.status(500).json({status:'error',message:'route si not defined'})
}
exports.deleteUser = (req,res)=>{
    res.status(500).json({status:'error',message:'route is not defined'})
}
