//반환문

function hello(name){
    return `${name} 님 안녕하세요`;
    console.log(name);//반환문 이후 문장은 무시
}

console.log(hello('이효리'));//반환문은 return 키워드 뒤에 오는 값을 반환


function func(){
    console.log('함수가 호출되었습니다.');
    // return;//undefined 반환문 생략 가능, 명시적이든 묵시적이든 return 키워드 뒤에 반환값이 정의되지 않으면 undefind 반환
}

console.log(func());
