const action = require('./helper');

const {
    todo
  } = action;

module.exports.fileAction = function action(acion,value){
if(acion === 'show') {
    todo.readData().then((data) => {
      console.log(data);
    });
  } else if(acion === 'new') {
    let data = value;
    todo.writeData(data).then((data) => {
      console.log(data);
    });
  } else if(acion === 'add') {
    todo.readData().then((data) => {
      let newData = data + '\n' + value;
      todo.writeData(newData).then((result) => {
        console.log(result);
      });
    });
  } else if(acion === 'deleteall') {
    todo.deleteData().then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  } else if(acion === 'read') {
    todo.readOne().then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  } else if(acion === 'delete') {
    todo.deleteOne(value).then((data) => {
      console.log(data);
      todo.writeData(data).then((result) => {
        console.log(result);
      });
    }).catch((error) => {
      console.log(error);
    });
  }
}