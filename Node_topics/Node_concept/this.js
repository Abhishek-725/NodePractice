// "use strict";
// b = 10;
// let globalThis1 = this;
// function name1() {
//     a = 10;
//     let functionThis = this;
//     console.log("globalThis1 == functionThis",globalThis1 === functionThis);
//     console.log("globalThis1 : ",globalThis1,"functionThis : ",functionThis);
//     console.log(this.a)
//     console.log(this.a + this.b )
//     console.log("with out this b1 ",this.b  )
// }

// name1();
// console.log("with out this export 1 ",exports.b);

// this.b = 20;
// function name2() {
//     a = 10;
//     console.log(this.a  )
//     console.log(this.a  + this.b)
//     console.log("with this 2 : ",this.b  )
// }

// name2();
// console.log("with this export 2 : ",exports.b);


// let t1 = this;

// function checkThis() {
//     a = 10;
//     let funcThis = this;
//     console.log(t1);
//     // console.log(funcThis);
//     console.log(t1 == funcThis);
// }
// checkThis();
// console.log(globalThis.a);

let findGlobal = () => {
    console.log(this);
    if (typeof self !== 'undefined') {
        return self
    };
    if (typeof window !== 'undefined') {
        return window
    };
    if (typeof global !== 'undefined') {
        return "global";
     }
  };
    
  // Function call
//   console.log(findGlobal());

// console.log(global.process);

let obj1 = {
    name : "Abhi",
    msg : 'hello '
}

function printInfo() {
    console.log(`Hi , I am ${this.name} and my msg is ${this.msg}`);
}

printInfo();
printInfo.bind(obj1)();