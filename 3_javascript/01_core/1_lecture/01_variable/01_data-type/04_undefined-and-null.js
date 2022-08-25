/* undefined 타입 */
/* undefined 타입의 값은 undefined 가 유일하다

var 키워드로 선언한 변수는 암묵적으로 undefined로 초기화 된다.
변수를 선언하고 할당하지 않은 변수를 참조하면 undefined 가 반환된다.

undefined 자바 스크립트 엔진이 변수를 초기화할 때 사용하는 값으로 개발자가 의도적으로 변수에 할당하는 것은 지양한다.
*/

let undef;
console.log(undef);


/* null 타입 */
/* null 타입의 값은 null 이 유일하다
변수에 값이 없다는 것을 의도적으로 명시할 때 사용
*/

let nullval = 'something';
nullval = null;
console.log(nullval);