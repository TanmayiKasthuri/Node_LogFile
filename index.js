//Everytime you execute the program, myEmitter will emit the event which thereby is listened by the myEmitter.on and it calls the logEvent function where logs folder is created if it does not exist else it lets the folder and file be and appends the log to the file

const logEvents=require('./server');//importing loEvents from server.js
const EventEmitter=require('events')

class MyEmitter extends EventEmitter{};

//creating obj for MyEmitter

const myEmitter=new MyEmitter();
//adding listener for log event
myEmitter.on('log',(msg)=>logEvents(msg));

myEmitter.emit('log','Log event emitted\n')//log Event emitted would be the message that would pass through
//The event emitted will be listened

