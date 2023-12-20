function hof (a) {
    return function (b) {
        return a + b;
    }
 }

console.log(hof(1)(2));