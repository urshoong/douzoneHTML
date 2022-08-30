//엄격모드

//전역의 선두에 추가를 하게 되면 스크립트 전체에 엄격모드 적용
// 'use strict'
/* 
function test(){
    //함수 몸체의 선두에 추가하면 해당 함수와 중첩함수에 strict mode 적용
    // 'use strict'
    x = 10;
    //코드의 선두에 위치시키지 않으면 strict mode 가 적용되지 않는다.
    // 'use strict'
}

test();

console.log(x);
 */

//1. 암묵적 전역
(function(){
    // 'use strict'
    //선언하지 않은 변수 참조 시 에러 발생
    x = 1;
    // console.log(x); //ReferenceError: x is not defined
})();

//2. 변수, 함수, 매개변수 삭제
(function(){
    'use strict'
    var x = 1;
    //strict 모드에서는 식별자에 대해 'delete'를 호출할 수 없습니다.
    // delete x; // delete 연산자로 변수, 함수, 매개변수 삭제 시 문법에러 발생
})();

//3. 매개변수이름 중복
(function(){
    // 'use strict'
    //SyntaxError: Duplicate parameter name not allowed in this context
    function test(x, x){
        return x + x;
    }
})();

//4. with 문사용
(function(){
    // 'use strict'
    //'with' 문은 strict 모드에서 사용할 수 없습니다.
    with({x : 1}){
        // console.log(x);
    }
})();

/* 
let student = {
    name:"남주혁",
    kor:100,
    eng:100,
    math:100,
};

console.log(student);

// "속성명" in 객체

console.log("student객체에 name속성이 있는지 확인 : "+ ('name' in student ));
console.log("student객체에 sum속성이 있는지 확인 : "+ ('sum' in student ));


with(student){
    console.log("학생이름 : "+ name );
    console.log("국어점수 : "+ kor );
    console.log("수학점수 : "+ math );
    console.log("영어점수 : "+ eng );
    console.log("총점 : "+ (kor + eng + math) );
    console.log("평균 : "+ ((kor + eng + math)/3) );
}
 */

/* 
//일반함수 this : 원래 일반함수 this는 전역객체를 가리킴, 생성자 함수가 아닌 일반함수 내부에서는 this를 사용할 필요가 없기 때문에 
//엄격모드 적용하고 일반함수로 호출하면 this에 undefied가 바인딩됨
(function(){
    'use strict'

    function test2(){
        console.log(this);
    }

    test2();

    new test2();
})();
 */


//엄격모드에서는 매개변수에 전달된 인수를 재할당하여 변경해도 arguments 객체에 반영되지않는다.
(function(x){
    'use strict'

    x = 2;
    console.log(arguments);
    // console.log(x);
})(1);


