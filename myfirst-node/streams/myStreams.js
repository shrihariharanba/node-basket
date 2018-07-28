const fs = require('fs');
const ws = fs.createWriteStream("fileout.txt");
const rs = fs.createReadStream("filein.txt",'utf-8');

rs.pipe(ws);