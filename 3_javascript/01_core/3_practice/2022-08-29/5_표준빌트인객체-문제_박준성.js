/* 5-1. 년, 월, 일을 전달하면 해당 날짜의 요일을 '월', '화', '수', '목', '금', '토', '일' 
문자열로 반환해주는 함수 getWeekDay를 만든다. */

console.log(getWeekDay(2022, 6, 21));       // 2022년 6월 21일
console.log(getWeekDay(2022, 12, 12));      // 2022년 12월 12일 

function getWeekDay(year, month, date) {
    // 코드 작성
    let day = new Date(year, month-1, date).getDay();
    switch(day){
        case 0: return '일';
        case 1: return '월';
        case 2: return '화';
        case 3: return '수';
        case 4: return '목';
        case 5: return '금';
        case 6: return '토';
    }
}

console.log('----------------------------------------------------------');

/* 5-2. 오늘 흐른 시간을 초 단위로 알려주는 getSecondsToday 함수와 오늘 남은 시간을 
초단위로 알려주는 getSecondsToTomorrow 함수를 만든다.

xxxxx초나 흘렀습니다. 시간을 소중히 씁시다^^
xxxxx초 밖에 안 남았습니다. 다시는 오지 않는 오늘입니다^^
*/
console.log(getSecondsToday());
console.log(getSecondsToTomorrow());

function getSecondsToday() {
    // 코드 작성
    let date = new Date();
    let date1 = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
    let calc = Math.ceil((date.getTime() - date1.getTime()) / 1000);
    return `${calc}초나 흘렀습니다. 시간을 소중히 씁시다^^`;
}

function getSecondsToTomorrow() {
    // 코드 작성
    let date = new Date();
    let date1 = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59);
    let calc = Math.trunc((date1.getTime() - date.getTime()) / 1000);
    return `${calc}초 밖에 안 남았습니다. 다시는 오지 않는 오늘입니다^^`;
}

console.log('----------------------------------------------------------');

/* 
5-3. 정규 표현식 (백준 9342)
상근이는 생명과학 연구소에서 염색체가 특정한 패턴인지를 확인하는 일을 하고 있다. 염색체는 알파벳 대문자 (A, B, C, ..., Z)로만 이루어진 문자열이다. 상근이는 각 염색체가 다음과 같은 규칙을 만족하는지 검사해야 한다.

문자열은 {A, B, C, D, E, F} 중 0개 또는 1개로 시작해야 한다.
그 다음에는 A가 하나 또는 그 이상 있어야 한다.
그 다음에는 F가 하나 또는 그 이상 있어야 한다.
그 다음에는 C가 하나 또는 그 이상 있어야 한다.
그 다음에는 {A, B, C, D, E, F} 중 0개 또는 1개가 있으며, 더 이상의 문자는 없어야 한다.
문자열이 주어졌을 때, 위의 규칙을 만족하는지 구하는 프로그램을 작성하시오.

output
Good
Infected!
Infected!
Infected!
Infected!
Infected!
Good
Good
Good
Good
 */

const words = [
    '15',
    'AFC',
    'AAFC',
    'AAAFFCC',
    'AAFCC',
    'BAFC',
    'QWEDFGHJMNB',
    'DFAFCB',
    'ABCDEFC',
    'DADC'
  ];
  
// 코드 작성
let regexp = /^[A-F]?[A]+[F]+[C]+[A-F]?$/;
for(let i = 0; i < words.length; i++){
    if(!regexp.test(words[i]))   console.log('Good');
    else                        console.log('Infected!');
}

console.log('----------------------------------------------------------');

/* 
5-4. arr 배열에는 숫자 뒤에 단위 문자가 붙거나 숫자 앞에 특수 문자가 1개 붙는 형태의 문자열들이 담겨있다. 
해당 값들의 앞 또는 뒤에 위치한 문자를 제거하고 숫자로 형변환한 값들이 담긴 새로운 배열을 반환하는 removeChar 함수를 작성한다.
output
[ 1080, 100, 200, 60, 6, -15 ]
 */
let arr = ["1080px", "$100", "+200", "60kg", "6m", "-15"];
console.log(removeChar(arr));

function removeChar(arr){
    // 코드 작성
    return result = arr.map(item => {
        let temp = '';
        for(let i = 0; i < item.length; i++){
            if(item.charAt(i) == '-' || !isNaN(item.charAt(i))) temp += item.charAt(i);
        }
        return Number(temp);
    });

}

console.log('----------------------------------------------------------');

/* 
5-5. 앞으로 읽어도 거꾸로 읽어도 똑같은 문자인지 판별하는 palindrom 함수를 만든다.
output
true
true
true
true
true
false
 */

const list = ['기러기', '토마토', '스위스', '인도인', '별똥별', '유재석'];

list.forEach(item => console.log(palindrom(item)));

function palindrom(str) {
    // 코드 작성
    let isCollect = true;
    let arr = str.split('');
    for(let i = 0, len = str.length; i < len / 2; i++){
        if(arr[i] != arr[len - 1 - i])  isCollect = false;
    }
    return isCollect;
}