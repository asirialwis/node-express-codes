
const {readFile} = require('fs');

console.log('Hi there')
readFile('./../first.txt','utf-8' , (err , result)=>{
        if(err){
            console.log(err)
            return
        }
        console.log(result)
        console.log('Completed first week')

})
console.log('start next week')

