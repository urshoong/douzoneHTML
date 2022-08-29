//함수 표현식
//자바스크립트의 함수는 객체의 타입의 값으로, 값의 성질을 갖는 객체를 일급 객체라고 한다
//함수는 일급객체이기 때문에 함수 리터럴로 생상헌 함수 객체를 변수에 할당할 수 있다.

// let hello2 = function hello1(name){
//     return `${name}님 안녕하세요`;
// };

//함수 표현식에는 함수명을 생략할 수 있다.
let hello = function(name){
    return `${name}님 안녕하세요`;
}

//식별자로 함수를 호출한다
console.log(hello('이효리'));

let calc = function add(a, b){//함수명 (add) 을 생략하지 않아도 된다.
    return a + b;
}

console.log(calc(10, 20)); //호출은 식별자로

// console.log(add(10, 20)); //함수명으로 호출은 불가능