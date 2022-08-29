// for in 반복문
// : 객체의 모든 키를 순회할 수 있다

let student = {
    name : '유관순',
    age : 16,
    getInfo(){
        return `${this.name}(은)는 ${this.age}세 입니다.`;
    }
};

for(let key in student){
    console.log(`key : ${key}`);
    console.log(`student[${key}] : ${student[key]}`);
}