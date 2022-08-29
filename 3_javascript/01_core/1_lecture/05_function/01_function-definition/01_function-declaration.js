//함수 선언문
function hello(name){
    return `${name} 님 안녕하세요`;
}

console.log(hello('유재석'));

/*
자바스크립트 엔진은 생성된 함수를 호출하기 위해 함수 이름과 동일한 식별자를 암묵적으로 생성하고, 거기에 함수 객체를 할당,
즉 함수는 함수 이름으로 호출되는 것이 아니고, 함수 객체를 가리키는 식별자로 호출

함수이름 hello1, 식별자 hello2
*/
let hello2 = function hello1(name){
    return `${name} 님 안녕하세요`;
}

console.log(hello2('유재석'));

