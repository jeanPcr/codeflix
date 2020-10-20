const fs = require ('fs')
module.exports = (file,rules)=>{
    if(file,rules){
        parseInt(rules)
        fs.chmod(file, rules, (err) => {
            if (err) throw err;
            console.log(`The permissions for file ${file} have been changed!`);
        });
    }
}