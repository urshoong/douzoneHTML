//계산된 프로퍼티 이름

const prefix = 'key';
let index = 0;

let obj = {};

//ES5 - 키 동적 생성을 하려면 객체 리터럴 외부에서 대괄호 표기법 사용
obj[prefix + '-' + index++] = index;
obj[prefix + '-' + index++] = index;
obj[prefix + '-' + index++] = index;

console.log(obj);

//ES6 - 객체 리터럴 내부에서도 키값 동적 생성 제고
let obj2 = {
    [`${prefix}-${index++}`] : index,
    [`${prefix}-${index++}`] : index,
    [`${prefix}-${index++}`] : index
};

console.log(obj2);