const http = require('http');

const server = http.createServer((req, res) => {
  // console.log(req.method);
  // res.write('Hello World');
  // res.write('Hello from Node JS');
  // res.write('Node is awesome');
  // res.write('Nodemon is awesome');
  // res.write('I have created a server');
  // res.end();
  if (req.method == "GET") {
    console.log(req.url);
    let myUrl = req.url;
    if(myUrl == '/test'){
        res.write('Hello World GET Test');
        res.end();
    }else if(myUrl == '/edu')
        res.write('Hello World GET Education');
        res.end();
  }

  if (req.method == "POST") {
    console.log(req.url);
    let myUrl = req.url;
    if(myUrl == '/test'){
        res.write('Hello World GET Test');
        const options = new URL('http://localhost:8000/edu');
        http.get(options,(response)=>{
        response.on('data',(chunk)=>{
            console.log('data--'+chunk);
        });
           });
        res.end();
    }else if(myUrl == '/edu')
        res.write('Hello World GET Education');
        res.end();
  }
});


server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
server.on('connection', (data) => {
  console.log('connection');
});
server.on('close', (data) => {
  console.log('close', data);
});

server.listen(8000, () => {
  console.log('Server started on port 8000');
})