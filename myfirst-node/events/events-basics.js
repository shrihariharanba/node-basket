const EventEmitter = require('events');

class MyEvents extends EventEmitter{}

const event = new MyEvents();

event.on('custom event', ()=>{
    console.log('Custom Event Raised');
});

event.emit('custom event');

event.on('custom event', ()=>{
    console.log('Custom Event Raised');
});

event.emit('custom second event');



