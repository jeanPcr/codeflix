const fs = require('fs')
module.exports = (filename)=>{
    fs.unlink(filename,(err)=>{
        if(err) throw err
        console.log(`File ${filename} successfully created!`);
    })

}