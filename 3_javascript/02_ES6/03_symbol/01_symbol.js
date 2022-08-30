//Symbol 외부코드에서 접근 불가능, 값도 덮어쓸 수 없는 숨김 프로퍼티를 만들 수 있다.

let student = {
   name : '홍길동'
};

let id = Symbol('id');
student[id] = 1;

console.log(Object.keys(student));
console.log(student[id]);



let student2 = {
   name : '홍길동',
   age : 16,
   [id] : 2 //객체 리터럴 안에서 사용할 경우 대괄호를 사용해 심볼형 키를 만들 수 있다.
}

for(let key in student2) console.log(key); //for in 반복문에서 키가 심볼인 경우 배제된다.
console.log(student2[id]);


console.log(Object.getOwnPropertySymbols(student));
console.log(Object.getOwnPropertySymbols(student2));


let symbol1 = Symbol('mySymbol');
let symbol2 = Symbol('mySymbol');
console.log(symbol1 === symbol2);

//Symbol.for(key) 를 사용해 심볼을 전역 심볼 레지스트리에 만들고 읽는다.
//그래서 동일한 이름으로 존재하지 않으면 새로운 심볼을 만들고, 있다면 심볼을 다시 읽어온다.
let symbol = Symbol.for('id1');
let id1 = Symbol.for('id1');
console.log(symbol === id1);


console.log(Symbol.keyFor(symbol));


//이름이 같더라도 값이 항상 다르므로 이름이 같을 때 값도 같기 원한다면 전역 레지스트리에 생성해서 사용해야함.