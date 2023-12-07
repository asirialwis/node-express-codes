const EventEmitter = require('events')

const customEmittor = new EventEmitter();

customEmittor.on('response',(name , id)=>{
    console.log(`data recived ${name} and ${id}`)
})


customEmittor.on('response',()=>{
    console.log(`data recived`)
})

customEmittor.on('res2',()=>{
    console.log(`second response`)
})

customEmittor.emit('response','john',34)
customEmittor.emit('res2')