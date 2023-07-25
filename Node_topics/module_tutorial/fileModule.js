const fs = require('fs/promises');

        /** ******* async file system ********/
console.log('line 4');
fs.readFile('./file.txt','utf-8')
    .then(data => console.log(data))
    .catch(err => console.log(err));
console.log('line 8');

async function readFile() {
    try {
        let result = await fs.readFile('./file.txt','utf-8');
    } catch (error) {
        console.log(error);
    }
}

// // console.log('Starting to read file...');
// // let result = fs.readFileSync('./file.txt','utf-8');
// // console.log('End of file.');
// // console.log(result);
// console.log('line 7');
// fs.readFile('./file.txt','utf-8',(err,data) => {
//     if (err) {
//         console.log("Error : ",err);
//     }else{
//         console.log('line 12',data);
//     }
// });
// console.log('line 15');
// fs.writeFileSync('./greet.txt',"Hello everyone!");
// console.log('line 17');
// fs.writeFile('./greet.txt'," Hello Abhishek",{flag : 'a'},(err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("line 22 - File written");
//     }
// })
// console.log('line 25');