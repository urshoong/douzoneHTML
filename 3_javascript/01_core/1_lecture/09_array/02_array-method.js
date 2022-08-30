//배열 메소드

const arr = [];
console.log(arr.constructor === Array);
console.log(Object.getPrototypeOf(arr) === Array.prototype);


const foodList = ['물회', '삼계탕', '냉면', '수박', '물회'];

console.log(`foodList.indexOf('물회') : ${foodList.indexOf('물회')}`);
console.log(`foodList.indexOf('물회', 1) : ${foodList.indexOf('물회', 1)}`);
console.log(`foodList.indexOf('삼겹살') :  ${foodList.indexOf('삼겹살')}`);

console.log(`foodList.lastIndexOf('물회') : ${foodList.lastIndexOf('물회')}`);
console.log(`foodList.lastIndexOf('물회', 1) : ${foodList.lastIndexOf('물회', 1)}`);
console.log(`foodList.lastIndexOf('삼겹살') : ${foodList.lastIndexOf('삼겹살')}`);

console.log(`foodList.includes('물회') : ${foodList.includes('물회')}`);
console.log(`foodList.includes('삼겹살') : ${foodList.includes('삼겹살')}`);

//Array.prototype.unshift : 배열의 맨앞에 요소 추가
//Array.prototype.shift : 배열의 맨앞 요소를 제거 후 반환
const chickenList = ['양념치킨', '후라이드', '파닭'];
console.log(chickenList);

chickenList.unshift('간장치킨');
chickenList.unshift('마늘치킨');
console.log(chickenList);

console.log(chickenList.shift());
console.log(chickenList.shift());
console.log(chickenList);


// Array.prototype.concat : 두 개 이상의 배열을 결합
const idol1 = ['아이브', '오마이걸'];
const idol2 = ['트와이스', '에스파'];
const idol3 = ['블랙핑크', '레드벨벳'];

// 배열명.concat(배열명1, 배열명2, ...)
const mix = idol1.concat(idol2);
const mix2 = idol3.concat(idol1, idol2);

console.log(`idol1을 기준으로 idol2 배열을 concat  : ${mix}`);
console.log(`idol3을 기준으로 idol1, idol2 배열을 concat  : ${mix2}`);



// Array.prototype.slice : 배열의 요소 선택 잘라내기
// Array.prototype.splice : 배열의 index 위치의 요소 제거 및 추가
const front = ['HTML', 'CSS', 'JavaScript', 'jQuery'];
//slice(시작인덱스, 종료인덱스)
console.log(`front.slice(1,3) : ${front.slice(1,3)}`);
console.log(`front : ${front}`);
//splice(시작인덱스, 제거수, [추가값,])
console.log(`front.splice(3,1,"React") : ${front.splice(3,1,"React")}`);
console.log(`front : ${front}`);


//Array.prototype.join : 배열을 구분자로 결합하여 문자열 반환
console.log(`${front.join()}`);
console.log(`${front.join('/')}`);

//Array.prototype.reverse : 배열의 순서 뒤집기
console.log(`${[1,2,3,4,5].reverse()}`);