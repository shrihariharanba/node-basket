const fs = require('fs');


const readline = require('readline');
let readData = function() {
    const rs = fs.createReadStream("task.csv","utf-8");
    let promise = new Promise((resolve, reject) => {
        rs.on('readable',(err)=>{            
            if(err){
                console.log(err);
                reject(err);
            }
            resolve(rs.read());
        });
        rs.on('end',()=>{
            console.log('Read end');
        });
    });
    return promise;
  }
  
  let writeData = function(data) {
    const ws = fs.createWriteStream();
    let promise = new Promise((resolve, reject) => {
        
        ws.on('writable',data,(err)=>{
            if(err) {
                console.log(err);
                reject(err);
              }
            ws.write(data);
            resolve('done');
        });
        ws.on('end',()=>{
            console.log('Wride end');
        });        
    });
    return promise;
  }
  
  let deleteData = function(data) {
    let promise = new Promise((resolve, reject) => {
      ws.truncate('taskSheet.csv', 0, (err) => {
        if(err) {
          console.log(err);
          reject(err);
        }
        resolve('done');
      });
    });
    return promise;
  }
  
  let readOne = function() {
    const rl = readline.createInterface({
        input: rs.createReadStream('taskSheet.csv')
    });
    let promise = new Promise((resolve, reject) => {
      rl.on('line', function (line) {
          console.log('Line from file:', line);
          
      });
      rl.on('close', () => {
        resolve('done');
      })
    });
    return promise;
  }
  
  let _readOne = function() {
    const rl = readline.createInterface({
        input: rs.createReadStream('taskSheet.csv')
    });
    let promise = new Promise((resolve, reject) => {
      let result = [];
      rl.on('line', function (line) {
          console.log('Line from file:', line);
          // result.append(line);
          result.push(line);
      });
      rl.on('close', () => {
        resolve(result);
      })
    });
    return promise;
  }
  
  let deleteOne = function(line) {
    let promise = new Promise((resolve, reject) => {
      _readOne().then((result) => {
        result.splice(line - 1, 1);
        console.log(result);
        resolve(result.join('\n'));
      });
    });
    return promise;
  }
  
  module.exports.todo = {
    readData,
    writeData,
    deleteData,
    readOne,
    deleteOne
  }
