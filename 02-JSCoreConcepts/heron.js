// boki trójkąta
a = 3;
b = 4;
c = 5;
// h = 7

let p = (a+b+c)/2
let S = Math.sqrt(p*(p-a)*(p-b)*(p-c))

console.log("-----Task 2-----")
console.log(`Pole trójkąta o bokach ${a}, ${b} oraz ${c} wynosi ${S}`);