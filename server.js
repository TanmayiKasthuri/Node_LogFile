const {format}=require('date-fns')//installed through cli using npm i date-fns
const {v4 : uuid}=require('uuid');//installed uuid version4 as uuid using npm i uuid
//both the installed dependencies reflect in package.json as soon as you install them
const fs= require('fs');
const fsPromises=require('fs').promises;
const path=require('path');

const logEvents=async(message)=>{
    const dateTime=`${format(new Date(),'yyyyMMdddd\tHH:mm:ss')}`
    const logItem=`${dateTime}\t${uuid()}\t${message}`
    console.log(logItem)
    
    try{
        if(!fs.existsSync(path.join(__dirname,'logs'))){//if logs folder does not exist slready, we create a new log folder
            await fsPromises.mkdir(path.join(__dirname,'logs'))

        }
        
        await fsPromises.appendFile(path.join(__dirname,'logs','eventLog.txt'),logItem)

    }
    catch(err){
        console.log(err)

    }
}

console.log(format(new Date(),'yyyyMMdddd\tHH:mm:ss'))
console.log(uuid())

module.exports=logEvents;