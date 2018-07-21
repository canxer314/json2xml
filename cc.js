const fs = require('fs');
const json2xml = require('./json2xmlp');

const cmds = process.argv
const jsonFilePath = cmds[2]

// process.argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`);
// });

console.log(cmds)
console.log(jsonFilePath)

fs.readFile(jsonFilePath, 'utf-8', function (err, data) {
    if (err) {
        console.log(err)
    } else {
        // console.log(data)
        fs.writeFile('output.xml', json2xml(JSON.parse(data)), function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log('ok.');
            }
        });
    }
})