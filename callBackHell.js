const { error } = require('console');
const {add,sub}=require('./dummy')
const path=require('path')
const fs=require('fs');//importing filesystem

console.log("Hello!World")
console.log(add(2,3))
console.log(sub(2,3))
console.log(path.basename(__filename))

//Here you put append inside callback function of write, that is inside the call backfunction of read. This is because they are asynchronous operations and you want read, write and append operations to complete in that particular order. But here moving one functon into the callbackof other would cause callback hell problem
//readfile is asyncronous(ex- if you log into Hello statement after readfile block, hello will be executed first)
fs.readFile(path.join(__dirname,'text1.txt'),(err,data)=>{
    //the whole path.join(__dirname,'text1.txt') could be replaced by just 'text1.txt'. But when there are nested folders, hardcoding could cause errors. Therefore using path by importing it would be a better option
    if (err) throw error;
    console.log(data.toString())
    console.log('read complete')
    fs.writeFile(path.join(__dirname,'written_text.txt'),'Hey writtentext',(err)=>{
        //the whole path.join(__dirname,'text1.txt') could be replaced by just 'text1.txt'. But when there are nested folders, hardcoding could cause errors. Therefore using path by importing it would be a better option
        if (err) throw error;
        console.log('writting complete')
        fs.appendFile(path.join(__dirname,'text1.txt'),'\nThis is the appended text',(err)=>{
            if (err) throw error;
            console.log('appending complete')
        })
    
    })

})





//Below code is code for catch block for the exception thrown above. This code is given by the node document itself. Here, process is inbuilt object and need not to be imported
//This is not a compulsary code. Runs without catching the exception too.

process.on('uncaughtExression',err=>{
    console.error(`Error:,${err}`);
    process.exit(1);
})