//일반함수와의 차이점

function Student(name, age){
    this.name = name;
    this.age = age;
    this.getInfo = function(){
        return `${this.name} 은(는) ${this.age}세 입니다.`;
    }
}

const student = new Student('유재석', 30);
console.log(student);
//일반함수로 호출된 Student 내의 this는 Window객체를 의미하므로 Windows객체에 값이 할당됨
console.log(age);
console.log(name);
console.log(getInfo());


function Dog(name, age){
    //ES6 에서 new 연산자 없이 호출되는 것을 방지하기 위해 new.target을 지원한다.
    //new 연산자 없이 일반함수로 호출된 함수 내부의 new.target은 undefined 이다.
    console.log(new.target);

    if(!new.target){
        return new Dog(name, age);
    }

    this.name = name;
    this.age = age;
}

const dog = new Dog('뽀삐', 3);
console.log(dog);

//대부분의 빌트인 생성자 함수는 내부적으로 new 연산자와 호출되었는지 확인한 후 적절한 값을 반환
const obj = Object();
console.log(obj);