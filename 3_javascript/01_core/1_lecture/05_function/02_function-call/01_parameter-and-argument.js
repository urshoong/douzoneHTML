//매개변수와 인수

function hello(name){
    console.log(name);//매개변수는 함수 봄체 내부에서만 참조

    console.log(arguments);//모든 인수는 암묵적으로 arguments 객체의 프로퍼티로 보관

    return `${name} 님 안녕하세요`;
}

// console.log(name);//매개변수는 함수 봄체 내부에서만 참조

let result = hello('홍길동');
console.log(result);

//함수 자체가 매개변수의 인수의 개수와 일치하는지 체크하지 않는다
result = hello();//인수가 부족해서 할당되지 않은 매개변수는 undefined 값이다
console.log(result);

//매개변수보다 인수가 더 많은 경우 초과된 인수는 무시된다.
result = hello('이효리', '유재석');
console.log(result);

//ES6에서 인수를 전달하지 않는 경우 매개변수 기본 값을 사용할 수 있다.
function hi(name = '유재석'){

    if(arguments.length !== 1 || typeof name !== 'string' || name.length === 0){//적절한 인수가 전달되었는지 확인
        throw new TypeError('인수의 개수는 한개여야 하고 문자열 값이고, 빈 문자열을 허용하지 않습니다.');
    }
    return `${name} 안녕`;
}

result = hi('홍길동', '유관순');
result = hi(1);

result = hi();
console.log(result);