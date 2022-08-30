//클래스 선언

class Student{
    //생성자는 1개 이상 정의될 수 없고 생략할 경우 암묵적으로 정의
    //암묵적으로 this를 반환하므로 반환문은 작성하지 않는다.
    constructor(name){
        this.group = 1; //고정값으로 인스턴스 초기화
        this.name = name; //인수값으로 인스턴스 초기화
    }

    //메서드
    introduce(){
        console.log(`안녕하세요 저는 ${this.group}반 학생 ${this.name} 입니다.`);
    }
}

let student = new Student('유재석');
student.introduce();

console.log(typeof student);
console.log(Student === Student.prototype.constructor);
console.log(Student.prototype.introduce); //클래스 내부에 정의한 메서드는 클래스.prototype에 저장, Array.prototype 처럼

// Student(); //TypeError: Class constructor Student cannot be invoked without 'new'


/* 클래스 표현식 */
//1. 익명클래스 표현식

let Tutor = class{
    teach(){
        console.log('이해하셨나요??');
    }
}

new Tutor().teach();

//2. 기명클래스 표현식
let Tutee = class MyTutee{
    learn(){
        console.log('이해했어요~~');
        console.log(MyTutee);//이름은 오직 클래스 내에서만 사용
    }
}

//클래스 밖에서는 MyTutee를 사용할 수 없다.
// console.log(MyTutee); //ReferenceError: MyTutee is not defined
new Tutee().learn();


//3. 클래스 동적 생성
function makeTutee(message){
    return class{
        feedback(){
            console.log(message);
        }
    }
}

//secondTutee에 클래스의 정의를 return받음
let secondTutee = makeTutee('10점만점 !!');
//new를 통하여 인스턴스 생성하고 함수 호출
new secondTutee().feedback();


//--> 클래스 표현식의 정의가 가능하다는 것은
//함수처럼 클래스도 일급객체이고 다른 표현식 내부에서 정의,전달,반환,할당 등이 가능