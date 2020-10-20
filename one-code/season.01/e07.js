const fs = require('fs')
module.exports = (filename)=>{
   if(fs.statSync(filename).isFile()){
    console.log(`The argument [ ${filename} ] is a file`);
   }
   else if(fs.statSync(filename).isDirectory()){
    console.log(`The argument [ ${filename} ] is a directory`);
   }
   else{
    console.log(`The argument [ ${filename} ] is another unix things`);
   }
}