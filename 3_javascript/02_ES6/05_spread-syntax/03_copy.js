//스프레드 문법을 이용하녀 배열,객체 복사

let arr = [10,20,30];
let arrCopy = [...arr];
console.log(arr);
console.log(arrCopy);
console.log(arr === arrCopy);//깊은 복사

arrCopy.push(50);
console.log(arr);
console.log(arrCopy);


let obj = {name : '이효리', age : 20};
let objCopy = {...obj};
console.log(obj);
console.log(objCopy);
console.log(obj === objCopy);

objCopy.age = 30;
console.log(obj);
console.log(objCopy);





