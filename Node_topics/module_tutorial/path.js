const path = require('node:path');

// console.log(path.isAbsolute(__filename));   //true
// console.log(path.isAbsolute('./data.json'));   //false
// console.log(path.basename(__filename));   //path.js
// console.log(path.basename(__dirname));   //module_tutorial
// console.log(path.extname(__filename));   //.js
// console.log(path.parse(__filename));   //{  root: 'C:\\', dir: 'C:\\Node\\Node_topics\\module_tutorial',
//                                         //  base: 'path.js', ext: '.js', name: 'path' }

// console.log(path.join('folder1','folder2','index.html'));   //folder1\folder2\index.html
// console.log(path.join('/folder1','folder2','index.html'));   //\folder1\folder2\index.html
// console.log(path.join('/folder1','../folder2','./index.html'));   //\folder2\index.html
// console.log(path.join('/folder1','/folder2','../index.html'));   //\folder1\index.html
console.log(path.join(__dirname,"data.json"));   //C:\Node\Node_topics\module_tutorial\data.json
