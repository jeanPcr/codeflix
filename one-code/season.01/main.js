const e01 = require('./e01')
const e02 = require('./e02');
const e03 = require('./e03');
const e04 = require('./e04');
const e05 = require('./e05');
const e06= require('./e06');
const e07= require('./e07');
const e08 = require('./e08');
const e09 = require('./e09');
const e10 = require('./e10');

const arg = process.argv[2]

switch (arg) {
    case "e01":
        e01()
        break;
    case "e02":
        console.log(e02(process.argv[3])); 
        break;
    case "e03":
        e03(process.argv[3])
        break;
    case "e04":
        e04(process.argv[3])
        break;
    case "e05":
        e05(process.argv[3],process.argv[4])
        break;
    case "e06":
        e06(process.argv[3])
        break;
        case "e07":
            e07(process.argv[3])
            break;
        case "e08":
            e08(process.argv[3])
            break;
        case "e09":
            e09(process.argv[3],process.argv[4])
            break;
        case "e10":
            e10(process.argv[3],process.argv[4])
            break;
    default:
        return console.log("No such file specifed");
        
}