module.exports = (filename) =>{
    const fs = require('fs')
    const content = fs.readFileSync(filename,"utf-8")
    console.log(content);
}