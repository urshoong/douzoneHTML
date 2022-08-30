//배열

//1. 배열 리터럴을 통해 배열 생성
const arr = ['바나나','복숭아','키위'];
console.log(arr);

//2. 배열 생성자 함수
const arr2 = new Array();
console.log(arr2);

//   전달된 인수값이 1개이고 숫자인 경우 length 프로퍼티값이 인수인 배열 생성
const arr3 = new Array(10);
console.log(arr3);

//   전달된 인수값이 2개 이상이거나 숫자가 아닌경우 인수를 요소로 갖는 배열 생성
const arr4 = new Array(1,2,3);
console.log(arr4);

//3. Array.of 메소드 - 전달된 인수를 요소로 갖는 배열 생성
console.log(Array.of(10));
console.log(Array.of(1,2,3));
console.log(Array.of('hello','js'));


console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);


console.log(arr.length);


for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

console.log(typeof arr);
console.log(arr instanceof Array);



const arr5 = [
    '홍길동', 
    20, 
    true, 
    null,
    undefined,
    NaN,
    Infinity,
    [],
    {},
    function(){}
];

console.log(arr5);


console.log([].length);
const arr6 = [1,2,3,4,5];
console.log(arr6.length);

arr6.push(6);
console.log(arr6.length);
arr6.pop();
console.log(arr6.length);

arr6.length = 3;
console.log(arr6.length);
console.log(arr6);

arr6.length = 10;
console.log(arr6.length);
console.log(arr6);
console.log(Object.getOwnPropertyDescriptors(arr6));


const sparse = [,2,,4];
console.log(sparse);
console.log(sparse.length);


console.log(Object.getOwnPropertyDescriptors(sparse));
/* 
writable – true이면 값을 수정할 수 있다. 그렇지 않다면 읽기만 가능하다.
enumerable – true이면 반복문을 사용해 나열할 수 있다. 그렇지 않다면 반복문을 사용해 나열할 수 없다.
configurable – true이면 프로퍼티 삭제나 플래그 수정이 가능하다. 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
 */


