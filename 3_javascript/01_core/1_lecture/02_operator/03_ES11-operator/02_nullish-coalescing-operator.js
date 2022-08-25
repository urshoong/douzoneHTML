/* null 병합연산자

ES11(ECMAScript2020) 에 도입된 연산자로 좌항의 피연산자가 null 또는 undefined 인 경우
우항의 피연산자를 반환하고, 그렇지 않으면 좌항의 피연산자를 반환한다.
*/

let test = null ?? '기본값';
console.log(test);

// let value = '' || '기본값';
let value = '' ?? '기본값';
console.log(value);