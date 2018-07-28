const fs = require('fs');
//console.log(process.argv);
let args = process.argv.slice(2);
let dataValue = "";
module.exports.value = fs.readFile('inputFile.txt',(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data.toString());

    return data.toString();
});

//let data = fs.readFileSync('inputFile.txt');

//console.log(2);

//console.log(data.toString());


module.exports.fun=  function foo(value){
this.dataValue = value;
}

module.exports.writeFun = fs.writeFile('inputFile.txt',dataValue+'somefile',(err)=>{
    if(err){
        console.log(err);
    }
    console.log(dataValue+'somefile');
});