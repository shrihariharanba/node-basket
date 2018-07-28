const fileHelper = require('./action');


let args = process.argv.slice(2);

fileHelper.fileAction(args[0],args[1]);


