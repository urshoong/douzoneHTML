//스프레드 문법, 전개 문법

console.log(`가장 큰 값 : ${Math.max(10, 20,30)}`);

let arr = [10,20,30];
console.log(`가장 큰 값 : ${Math.max(arr)}`);//안나옴
console.log(`가장 큰 값 : ${Math.max(...arr)}`);


let arr1 = [10,20,30];
let arr2 = [100, 300, 200];

console.log(`가장 큰 값 : ${Math.max(...arr1, ...arr2)}`);
console.log(`가장 큰 값 : ${Math.min(...arr1, ...arr2)}`);


let merged = [0, ...arr, 2, ...arr2];
console.log(merged);


let str = "JavaScript";
console.log([...str]);
console.log(Array.from(str));




