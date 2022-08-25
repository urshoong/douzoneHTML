//명시적 타입 번환
/*
개발자가 의도에 따라 타입 변환
표즌 빌트인 생성자 함수 (String, Number, Boolean) 을 new 연산자 없이 호출하는 방법,
빌트인 메서드를 사용하는 방법,
암묵적 타입 변환을 사용하는 방법이 있다.
 */

//1. String 생성자 함수를 new 연산자 없이 호출
console.log(String(10)); //"10"
console.log(String(NaN));
console.log(String(Infinity));
console.log(String(true));
console.log(String(false));

//2. Object.Prototype.toString 메소드 활용
console.log((10).toString());
console.log((NaN).toString());
console.log((Infinity).toString());
console.log((true).toString());
console.log((false).toString());

//3. 문자열 연결 연산자 이용 - 암묵적 변환 챕터에서 확인