const buffer = new Buffer.from("Abhishek","utf-8");

console.log(buffer.write('hello world'));
console.log(buffer.toString());    //Abhishek
console.log(buffer.toString('hex'));  //68656c6c6f20776f
console.log(buffer);    //hexa-representation <Buffer 41 62 68 69 73 68 65 6b>
console.log(buffer.toJSON());
