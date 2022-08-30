//생성자함수

const student1 = {
    name : '이효리',
    age : 16,
    getInfo : function(){
        return `${this.name} 은(는) ${this.age}세 입니다.`;
    }
}

const student2 = {
    name : '유재석',
    age : 20,
    getInfo : function(){
        return `${this.name} 은(는) ${this.age}세 입니다.`;
    }
}

function Student(name, age){
    //생성자함수 내부의 this는 함수가 생성할 인스턴스를 가리킴
    this.name = name;
    this.age = age;
    this.getInfo = function(){
        return `${this.name} 은(는) ${this.age}세 입니다.`;
    }

    //암묵적으로 this 반환
    //명시적으로 원시값을 반환하면 무시되고 this가 반환됨
    //명시적으로 빈 객체를 넣으면 빈 객체가 반환됨
    //생성자함수에서는 return을 생략하는 것이 기본이다
    // return {};
}

const student3 = new Student('로운', 20);
const student4 = new Student('남주혁', 20);

console.log(student1.getInfo());
console.log(student2.getInfo());
console.log(student3.getInfo());
console.log(student4.getInfo());