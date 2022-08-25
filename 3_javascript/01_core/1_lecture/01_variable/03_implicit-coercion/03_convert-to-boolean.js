//불리언 타입으로 변환

//자바스크림트 엔진은 불리언 타입이 아닌 값을 Truety 값(참으로 평과되는 값) 과 Falsy 값(거짓으로 평가되는 값) 으로 구분
if(true) console.log("if(true)");
if(false) console.log("if(false)");
if(undefined) console.log("if(undefined)");
if(null) console.log("if(null)");
if(0) console.log("if(0)");
if(NaN) console.log("if(NaN)");
if('') console.log("if('')");
if('JavaScript') console.log("if('JavaScript')");

//false, undefined, null, 0, NaN, ''(빈문자열) 은 Falsy 값이고
//이외의 모든 값은 Truety 값이다.

