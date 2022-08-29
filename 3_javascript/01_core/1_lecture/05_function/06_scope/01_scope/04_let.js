//var 의 단점을 보완하기 위해 ES6에서 새로운 변수 선언 키워드인 let, const 도입

//1. 변수 중복선언 금지
let msg = '안녕하세요';
// let msg = '안녕히 가세요';//let 이나 const 키워드로 선언된 변수는 같은 스코프내에서 중복 선언을 허용하지 않는다.


//2. 블록 레벨 스코프
let i = 0;

for(let i = 0; i < 10; i++){
    console.log(`지역변수 i : ${i}`);
}
console.log(`전역변수 i : ${i}`);


//3. 변수 호이스팅
//let 키워드로 선언한 변수는 변수 호이스팅이 발생하지 않은것 처럼 동작한다
//var 키워드는 선언 단계와 초기화 단계가 함께 진행되지만, let 키워드는 선언단계와 초기화 단계가 분리되어 진행
//실제 코드가 실행될 때 초기화됨. 따라서 선언은 되었지만 초기화 되지 않아 참조시 오류 발생단계
console.log(x);//Cannot access 'x' before initialization 
let x;