let a=1;
// module.exports.obj={
//     key:'value'
// }

//global.a=a;
//console.log(++a);
//module.exports.a=a;

function foo(){
    a=2;
    console.log(a);
}
foo();
module.exports = function barr(){
return {
    key : a
};
}
