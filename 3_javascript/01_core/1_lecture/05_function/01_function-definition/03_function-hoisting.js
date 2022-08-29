//함수 호이스팅

/*
호이스팅 이란 : 변수(var) 나 함수 선언문이 해당 scope 의 선두로 옴겨진 것처럼 동작하는 특성
즉 자바스크립트 엔진에 의해 먼저 실행되어 함수선언문 이전에 함수를 참조할 수 있고 호출할 수 있다.
변수에서 변수 자체의 값이 끌어올려 지는 것이 아니고 선언부만 끌어올린다.(let, const 는 호이스팅되지 않음)

함수 선언식은 호이스팅 되고, 함수 표현식은 호이스팅 되지 않는다.
(if, for 문 등의 코드 블럭에서 함수 선언문을 통해 함수 정의하는 것을 지양)
*/

console.log(hello);
console.log(hello('이효리'));
console.log(hi);//undefined
// console.log(hi('이효리'));//에러 발생

function hello(name){
    return `${name} 님 안녕하세요`;
}

var hi = function(name){//함수 표현식, let 으로 변경 시 호이스팅이 일어나지 않아 에러 발생
    return `${name} 안녕~~`;
}

console.log(hi);
console.log(hi('이효리'));//반드시 함수 표현식 이후에 참조 또는 호출해야 하므로 여기서는 잘 출력됨


