//중첩 함수
//함수 내부에 정의된 함수를 중첩 함수 또는 내부 함수라고 함. 중첩 함수를 포함하는 함수는 외부함수라고 함

function outer(){

    var outerVal = '외부함수';

    function inner(){
        var innerVal = '내부함수';
        console.log(outerVal, innerVal);//내부함수는 외부함수의 변수를 참조가능
    }

    inner();
}

outer();
