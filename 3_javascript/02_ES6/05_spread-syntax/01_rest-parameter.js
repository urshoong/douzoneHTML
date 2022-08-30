//나머지 매개변수 ...

//Rest Parameter 는 함수에 전달된 인수의 목록을 배열로 전달받음


function merge(msg1, msg2){
    return msg1 + msg2;
}

console.log(merge('안녕하세요.'));
console.log(merge('안녕하세요.', '반갑습니다.'));
console.log(merge('안녕하세요.', '반갑습니다.', '제 이름은 홍길동입니다'));

function mergeAll(...args){//항상 마지막에 정의되어있어야 한다.
    let message = '';
    
    for(let arg of args) message += arg;
    
    return message;
}


console.log(mergeAll('안녕하세요.'));
console.log(mergeAll('안녕하세요.', '반갑습니다.'));
console.log(mergeAll('안녕하세요.', '반갑습니다.', '제 이름은 홍길동입니다'));
