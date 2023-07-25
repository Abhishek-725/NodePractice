const fs = require('fs');
const zlib = require('zlib');

const gzlib = zlib.createGzip();

let readAbleStream = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
  highWaterMark : 4
});

readAbleStream.pipe(gzlib).pipe(fs.WriteStream("./file2.txt.gz"));

// let writeAbleStream = fs.createWriteStream('./file2.txt');
// readAbleStream.pipe(writeAbleStream);

// readAbleStream.on("data",(chunk) => {
//     console.log(chunk);
//     writeAbleStream.write(chunk,(error) => {
//        if (error) {
//         console.log("Write Error :",error);
//        }
//     })
// });