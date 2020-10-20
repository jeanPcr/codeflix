module.exports = (filename,content)=>{
    const fs = require('fs')
    if(filename && content){
        fs.writeFile(filename,content,(err,data)=>{
            if (err)throw err
            console.log(`File ${filename} successfully created!`);
        })
        
    }
    else{
    console.error("Please enter filename and content")
    }
}