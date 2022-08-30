//배열 구조 분해 할당

let nameArr = ['Gildong', 'Hong'];

// let firstName = nameArr[0];
// let lastName = nameArr[1];

let [firstName, lastName] = nameArr;
console.log(firstName);
console.log(lastName);


let [firstName2, lastName2] = "Gildong Hong".split(' ');
console.log(firstName2);
console.log(lastName2);


//쉼표를 사용해서 필요하지 않은 배열 요소는 버릴 수 있다.
let [firstName3, , lastName3] = ['firstName', 'middleName' , 'lastName'];
console.log(firstName3);
console.log(lastName3);


//대입연산자를 기준으로 우측에는 모든 이터러블 가능.
//좌측에는 객체프로퍼티도 가능
let user = {};
[user.firstName, user.lastName] = "Gildong Hong".split(' ');

console.log(user.firstName);
console.log(user.lastName);


for(let [key, value] of Object.entries(user)){
    console.log(`${key} : ${value}`);
}


let student = '유관순';
let teacher = '홍길동';

[student, teacher] = [teacher, student];

console.log(`${student} ${teacher}`);


let [sign1, sign2, ...rest] = ['양자리','황소자리','쌍둥이자리','게자리','사자자리'];

console.log(sign1);
console.log(sign2);
console.log(rest);


let [firstName4 = '아무개', lastName4 = '김'] = ["길동"];

console.log(firstName4);
console.log(lastName4);




