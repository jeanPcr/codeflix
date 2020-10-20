const path = require("path")
module.exports = (filename) =>{
    return path.extname(filename)
}