const EventEmitter = require('events');

class MyEvents extends EventEmitter{}

const event = new MyEvents();

event.on('custom event', (data)=>{
    setImmediate(()=>{
        console.log('Custom Event Raised Immideate',data);
    });
});

event.on('custom event', (data)=>{
    setTimeout(()=>{
        console.log('Custom Event Raised Timeout', data);
    },0);
});

event.on('custom event', (data)=>{
     console.log('Custom Event Raised Normal',data);
   });



event.emit('custom event','test');

event.on('custom event', ()=>{
    console.log('Custom Event Raised');
});

event.on('custom event', (data)=>{
    proces.nextTick(()=>{
        console.log('Custom Event Raised Timeout 1', data);
    });
});

event.on('custom event', (data)=>{
    proces.nextTick(()=>{
        console.log('Custom Event Raised Timeout 2', data);
    });
});

event.emit('custom second event');



