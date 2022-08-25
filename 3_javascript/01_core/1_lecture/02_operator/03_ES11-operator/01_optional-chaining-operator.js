/*
옵셔널 체이닝 연산자
ES11 (ECMAScript 2020)에 도입된 연산자로 좌항의 피연산자가 null또는 undefined 인 경우 undefined를 반환하고
그렇지 않으면 우항의 프로퍼티 참조를 이어간다.
 */

let obj = null;

let val = obj;
console.log(val);

let val2 = obj?.value;//좌항의 피연산자(obj)가 null 또는 undefined 인 경우 undefined를 반환
console.log(val2);

let str = '';
let len1 = str && str.length;//빈문자일 경우 && 을 이용한 단축 평가로 확인 시 falsy값으로 false 취급해서 생기는 문제가 있다.
let len = str?.length;//옵셔널 체이닝 연산자를 사용할 경우 빈문자열은 null또는 undefined가 아니므로 문자열 길이값이 담긴다.
console.log(len);
console.log(len1);

