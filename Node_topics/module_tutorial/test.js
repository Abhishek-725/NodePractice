// async function test(){
//     try {
//         await xyz();
//     } catch (error) {
//         console.log(error);
//     }
// }

// function xyz() {
//     return  new Promise((res,rej) => {
//        try {
//         setTimeout(() => {
//             rej(123);
//         }, 1000);
//        } catch (error) {
//         console.log(error);
//        }
//     })
// }

// test();

// const a = {
//     a : 3,
//     b : 4,
//     c : function() {
//         console.log(' '+ this.a + this.b + 88 + "") ;
//     }
// }

// let result = a.c;
// console.log(result());
console.log(parseInt(null));
console.log(parseInt(''));
console.log(parseInt(false));
console.log(parseInt(0));
console.log(parseInt('o10pxnncb'));
console.log(parseInt(+null));