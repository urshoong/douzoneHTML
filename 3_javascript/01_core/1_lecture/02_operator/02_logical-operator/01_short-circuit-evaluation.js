/* 01_logical-operator(논리 연산자) 
||(OR), &&(AND), !(NOT) 의 논리 연산자는 피연산자를 논리 연산한다.
*/

/* 01_short-circuit evaluation(단축 평가)
표현식을 평가하는 도중 평가 결과가 확정 된 경우 나머지 평가 과정을 생략하는 것 
*/

//OR 의 경우 'apple'이 이미 Truety 값이어서 true로 평가되고
//논리 연산의 결과를 결정한 첫번째 피연산자 apple 을 그대로 반환한다.
console.log('apple' || 'banana'); //apple
console.log(false || 'banana');//banana
console.log('apple' || false);//apple

console.log('');

//AND 의 경우 좌항 우항 모두 확인해야 하므로
//논리연산의 결과르 결정하는 두번째 피연산자 banana를 그대로 출력
console.log('apple' && 'banana');//banana
console.log(false && 'banana');//false
console.log('apple' && false);//false

console.log('');

//단축 평가를 사용하면 if 문을 대체할 수 있다.
let num = 1;
if(num % 2 == 0)
console.log('짝수입니다.');
else
console.log('홀수입니다.');

num % 2 == 0 && console.log('짝수입니다.');
num % 2 == 0 || console.log('홀수입니다.');

console.log('');

// let obj = null;
let obj = {'k':'v'};
// let val = obj.value;

let val = obj && obj.k;

console.log(val);
//obj가 Falsy (null, undefined) 값이면 좌항만 실행하여 
//obj가 Truety 값이면 val -> v