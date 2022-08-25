//숫자 타입으로 변환

//산술연산자의 피연산자는 모두 숫자여야하므로 숫자가 아닌 피연산자를 숫자타입으로 암묵적 변환
console.log(10 - '5');
console.log(10 * '5');
console.log(10 / '5');
console.log(10 % 'JavaScript');//피연산자를 숫자로 변환 불가 하여 연산 수행이 불가능 - NaN

//비교 연산자로 크기를 비교하기 위해 모두 숫자타입이어야 하므로 피연산자를 숫자 타입으로 암묵적 변환
console.log(10 > '5');

//+ 단항연산자는 피연산자가 숫자타입이 아니면 숫자타입으로 변환
console.log('----------------------------------');
console.log(+'');                  
console.log(+'1');
console.log(+'JavaScript');
console.log(+true);
console.log(+false);
console.log(+null);
console.log(+undefined);
// console.log(+Symbol());
console.log(+{});
console.log(+[]);
console.log(+function(){});

//빈문자열, 빈배열, null, false 는 0으로, true는 1로 반환
//객체나 undefined 반환되지 않아 NaN

