let dog = {
    name : '뽀삐'
}

//이미 존재하는 프로퍼티에 할당하면 갱신
dog.name = '두부';

console.log(dog);

//존재하지 않는 프로퍼티에 값 할당 시 동적으로 생성되어 추가
dog.age = 3;

console.log(dog);


delete dog.age;
delete dog.something;//존재하지 않는 프로퍼티 삭제 시 에러 없이 무시
console.log(dog);

