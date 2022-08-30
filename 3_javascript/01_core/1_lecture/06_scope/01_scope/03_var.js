//1. 변수 종복 선언 허용
var msg = '안녕하세요';
console.log(msg);

//var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언이 허용,
//초기화 문이 있는 변수 선언문은 자바스크립트 엔진에 의해 var 키워드가 없는 것처럼 동작
var msg = '안녕히 가세요';
console.log(msg);

//초기화문이 없는 변수 선언문은 무시
var msg;
console.log(msg);



//2, 함수 외부에서 var 키워드로 선언한 변수는 코드블록 내에서 선언해도 모두 전역 변수가 된다

var i = 0;

for(var i = 0; i < 10; i++){

}
console.log(i);

//3. 변수 호이스팅
//실행 시 오류는 나지 않지만 프로그램의 흐름에 맞지 않고 가독성을 떨어뜨리며 오류를 만들 여지가 있다.
console.log(test);
test = '반갑습니다.';
console.log(test);

var test;