const express = require('express')
const app = express()

app.get('/', (req, res) =>{
  res.send('Hello World')
})


app.get('*',(req,res)=>{
  res.status(404).send('404 page not found')
})

app.listen(5000,(req,res)=>{
  console.log('Server is running on port 5000')
})