const { fstat } = require("fs")
const fs = require('fs')
module.exports = (file)=>{
    if (file) {
        // Check if the file is readable.
        fs.access(file, fs.constants.R_OK, (err) => {
            console.log(`${file} ${err ? 'is not readable' : 'is readable'}`);
        });
        
        // Check if the file is writable.
        fs.access(file, fs.constants.W_OK, (err) => {
            console.log(`${file} ${err ? 'is not writable' : 'is writable'}`);
        });
    }
}