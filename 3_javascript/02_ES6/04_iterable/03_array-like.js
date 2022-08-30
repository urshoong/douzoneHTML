// 01. iterable and array-like (이터러블과 유사 배열)
/* 이터러블(iterable) : 메서드 Symbol.iterator가 구현된 객체
유사 배열(array-like) : 인덱스와 length 프로퍼티가 있어서 배열처럼 보이는 객체
*/

let arrayLike = {
    0: '배열인듯',
    1: '배열아닌',
    2: '배열같은너',
    length : 3
}

//배열 메소드 사용 불가
// console.log(arrayLike.pop()); //TypeError: arrayLike.pop is not a function

//Array.from : 넘겨받은 인수가 유사배열, 이터러블 인 경우 새로운 배열 만들고 새롭게 만든 배열로 복사
let arr = Array.from(arrayLike);
console.log(arr);



let range = {
    from : 1,
    to : 5
};

//이터러블은 메서드 Symbol.iterator 가 구현된 객체
//일반객체는 Symbol.iterator 메서드를 소유하지 않는다. 따라서 이터러블이 아님
//for of 로 최초 호출시 Symbol.iterator가 호출됨
//화살표 함수 안됨???
range[Symbol.iterator] = function(){
    return {
        current : this.from,
        last : this.to,
        // for off 반복문에 의해 반복마다 next() 호출됨
        next(){//next()는 값을 객체 형태로 반환
            if(this.current <= this.last){
                return {done : false, value : this.current++}; //done이 true이면 반복이 끝났음을 의미, 끝나지 않은 경우 value는 다음값이 된다.
            }else{
                return {done : true};
            }
        }
    }
}

let arr2 = Array.from(range);
// let arr2 = [...range];
console.log(arr2);

let arr3 = Array.from(range, num => num * num);
console.log(arr3);