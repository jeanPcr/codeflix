module.exports = (filename) =>{
    const fs = require('fs')
    fs.readFile(filename, (err, data) => {
        if (err) throw err;
        console.log(data);
      });
    
}