const EventEmitter = require('events');

class MyEvents extends EventEmitter{}

const event = new MyEvents();

event.on('custom event', ()=>{
    console.log('Custom Event Raised 1');
});

//event.emit('custom event');

event.once('custom event', ()=>{
    console.log('Custom Event Raised 2');
});

event.emit('custom event');
event.emit('custom event');



