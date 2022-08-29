//ES6 에서 도입된 화살표 함수, function 키워드 대신 화살표 함수를 사용해 좀 더 간략한 방법으로 함수를 선언할 수 있다.
//화살표 함수는 항상 익명으로 정의, 본문이 한줄인 함수일 때 유용

let message;

message = function(){
    return "Hello World";
};

console.log(message());

message = () => "Hello World";

console.log(message());


message = (var1, var2) => 'Arrow ' + var1 + var2;

console.log(message('Function', '!'));


message = val1 => "Arrow " + val1;
console.log(message('Functions'));