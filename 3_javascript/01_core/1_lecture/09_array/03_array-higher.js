//배열고차함수

let numbers = [];

for(let i = 0; i < 10; i++){
    numbers[i] = Math.floor(Math.random() * 100) + 1;
}

console.log(`정렬전 numbers : ${numbers}`);

numbers.sort();

console.log(`정렬후 numbers : ${numbers}`);

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// 오름차순 정렬이 기본이며 정렬 후 정렬 순서를 유지함
// 배열은 기본적으로 문자열 정렬이 되므로 한자리수, 세자리수가 올바르지 않게 정렬 되는 모습을 확인할 수 있음
// => 다른 정렬 기준을 사용하려면 매개변수로 compare 함수 전달


function compare(a, b){
    if(a > b) return 1;
    if(a == b) return 0;
    if(a < b) return -1;
}

numbers.sort(compare);
console.log(`매개변수로 compare 함수 전달 후 numbers : ${numbers}`);


numbers.sort((a, b) => b - a);
console.log(`numbers : ${numbers}`);


//Array.prototype.forEach : for 를 대체할 수 있는 고차함수
numbers = [1,2,3,4,5];
numbers.forEach(function(item, index, array){
    //배열의 요소 각각에 실행할 기능을 작성, 각 요소에 대해 콜백을 실행, 배열을 순회하기 때문에 break 사용할 수 없다. //반환값도 없다.
    console.log(`item : ${item}`);
    console.log(`index : ${index}`);
    console.log(`array : ${array}`);
});


numbers.forEach(item => console.log(item * 10));


//Array.prototype.map : 배열 요소 전체를 대상으로 콜백 함수 호출 후 반환 값들로 구성된 새로운 배열 반환
const types = [true, 1, 'text'].map(item => typeof item);
console.log(`types : ${types}`);

const lengths = ['apple','banana','cat','dog','egg'].map(item => item.length);
console.log(`lengths : ${lengths}`);


//Array.prototype.filter : 배열요소 전체를 대상으로 콜백함수 호출 후 반환값이 true 인 요소만 구성된 새로운 배열 반환 //원본배열에 영향을 미치지 않음
const odds = numbers.filter(item => item % 2);
console.log(odds);
console.log(numbers);


//Array.prototype.reduce : 배열을 순회하며 각 요소에 대한 이전의 콜백함수 실행 반환값을 전달하여 콜백함수 실행하고 그 결과를 반환
numbers.reduce(function(previousValue, currentValue, currentIndex, array){
    console.log(`previousValue : ${previousValue}`);//이전콜백의 반환값
    console.log(`currentValue : ${currentValue}`);//배열요소의 값
    console.log(`currentIndex : ${currentIndex}`);//배열요소의 인덱스
    console.log(`array : ${array}`);//메소드를 호출한 배열
});

//합산
const sum = numbers.reduce(function (previousValue, currentValue){
    console.log(`pre : ${previousValue}, cur : ${currentValue}`);
    return previousValue + currentValue;
});
console.log(`sum : ${sum}`);

//최대값
const max = numbers.reduce(function(pre, cur){
    return pre > cur ? pre : cur;
});
console.log(`max : ${max}`);


//Array.prototype.some : 배열내 일부 요소가 콜백 함수의 테스트를 통과하는지 확인하여 그 결과를 boolean 으로 반환
let result = [1,5,2,3,4].some(item => item > 10);
console.log(`reuslt : ${result}`);
let result1 = [1,5,2,3,4].some(item => item > 3);
console.log(`reuslt1 : ${result1}`);

result = ['apple','banana','cat','dog'].some(item => item === 'egg');
console.log(`result : ${result}`);


//Array.prototype.every : 배열 내 모든 요소가 코랩ㄱ 함수의 테스트를 통과하는지 확인하여 그 결과를 booleam으로 반환
result = [1,5,2,3,4].every(item => item > 3);
console.log(`reuslt : ${result}`);
result1 = [1,5,2,3,4].every(item => item > 0);
console.log(`reuslt1 : ${result1}`);



