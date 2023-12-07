const{readFile , writeFile} = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start  = async()=>{

    try{
        const first = await readFile('./first.txt','utf-8')
        const second = await readFile('./third.txt','utf-8')
        await writeFile('./async-patterns/async.txt' , `This is awesome : ${first},${second}`);

    }
    catch(error){
        console.log(error);
    }

    }
start();
