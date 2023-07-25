// let str = 'Mom1jk'

// function palindrome(str) {
//     if (typeof str == 'string') {
//         str = str.toLowerCase();
//         let palinStr = '';
//         for (let i = str.length -1 ; i >= 0; i--) {
//             palinStr += str[i];
//         }
//         return str === palinStr ? 'Palindrome' : 'Not Palindrome'
//     }
// }
// console.log(palindrome(str));



setImmediate(() => console.log('immediate'));
setInterval(() => {
    console.log('hi');
},0);

for (let i = 0; i < 30009999; i++) {}
// => hi
// immediate
// hi.............................


// setTimeout(function() {
//     setTimeout(function() {
//       console.log('setTimeout')
//     }, 0);
//     setImmediate(function() {
//       console.log('setImmediate')
//     });
//   }, 50);
// setImmediate
// setTimeout