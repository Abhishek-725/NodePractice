// Create a global property with `var`
var x = 10;
this.x = 78
function createFunction1() {
  const x = 20;
  return new Function("return x;"); // this `x` refers to global `x`
}

function createFunction2() {
  const x = 20;
  function f() {
    return x; // this `x` refers to the local `x` above
  }
  return f;
}

const f1 = createFunction1();
console.log(f1()); // 10
const f2 = createFunction2();
console.log(f2()); // 20




let count = 0; 
(function immediate() { 
    if(count === 0) { 
        count += 1; 
        immediate(); 
    } 
    console.log(count); 
}
)();


let x = 10; 
function outerFunction() { 
 return function innerFunction() { 
 console.log(x); 
 }; 
} 
const closure = outerFunction(); 
x = 20; closure();

const obj = { a: 1, b: { c: 2 } }; 
const copy = Object.assign({}, obj); 
copy.b.c = 42; 
console.log(obj.b.c); 