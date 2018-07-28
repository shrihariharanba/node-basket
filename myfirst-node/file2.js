//const file2 = require('./file1');
//console.log(file2());
const os = require('os');

let user = {
    1: {
        name : 'john'
    },
    2: {
        name : 'danny'
    } 
};

let items = {
    1: {
        name: 'Item1',
        price: 100
    },
    2: {
        name: 'Item2',
        price: 200
    }
};

let itemPurchased = {
    id1: {
        user :{
            id: 1
        },
        items: {
            id:2
        }
    }
}

var cb = function fetch(userName){
 return user[userName];
}
function sample(cb){
setTimeout(()=>{
return cb(1);
},2000);
}
console.log(sample(cb));
