/** 1-1. if문/삼항연산자 */
/*
변수 grade의 값이 "손님"인 경우 "글 읽기", "일반 회원"인 경우 "글 읽기, 글 쓰기", 
"운영자"인 경우 "글 읽기, 글 쓰기, 글 삭제" 라는 값을 변수에 저장하여 아래와 같이 콘솔로 출력한다.
console
    Ex. 운영자의 경우 글 읽기, 글 쓰기, 글 삭제가 가능합니다.
 */

//if문 code
var grade = '손님';     //'일반회원', '운영자'로 변경해서 테스트
// var grade = '일반회원';
// var grade = '운영자';


// 코드 작성
var authority;
if(grade == '손님')             authority = '글 읽기';
else if(grede == '일반회원')    authority = '글 읽기, 글 쓰기';
else                            authority = '글 읽기, 글 쓰기, 글 삭제';

console.log(grade + "의 경우 " + authority + " 가 가능합니다.");

console.log('-------------------------------------------------------------------');

//삼항연산자 code
var grade = '손님';     //'일반회원', '운영자'로 변경해서 테스트

// 코드 작성
var authority;
switch(grade){
    case '손님':
        authority = '글 읽기';
        break;
    case '일반회원':
        authority = '글 읽기, 글 쓰기';
        break;
    case '운영자':
        authority = '글 읽기, 글 쓰기, 글 삭제';
        break;
    default:
        break;
    }
    
console.log(grade + "의 경우 " + authority + " 가 가능합니다.");

console.log('-------------------------------------------------------------------');

/** 1-2. switch문 */
/*
아래 if문으로 작성 된 script를 switch문으로 변환한다.
*/
//if문 code
var browser = 'Edge';   // 'Chrome', 'Firefox' 등으로 변경해서 테스트
if (browser == 'Edge') {
    console.log("Edge를 사용하고 계시네요!");
} else if (browser == 'Chrome'
|| browser == 'Firefox'
|| browser == 'Safari'
|| browser == 'Opera') {
    console.log('저희 서비스가 지원하는 브라우저를 사용하고 계시네요.');
} else {
    console.log('현재 페이지가 괜찮아 보이길 바랍니다!');
}
//switch문 code
var browser = 'Edge';   // 'Chrome', 'Firefox' 등으로 변경해서 테스트
// var browser = 'Chrome';
// var browser = 'Firefox';

// 코드 작성
switch(browser){
    case 'Edge':
        console.log("Edge를 사용하고 계시네요!");
        break;
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        console.log('저희 서비스가 지원하는 브라우저를 사용하고 계시네요.');
        break;
    default:
        console.log('현재 페이지가 괜찮아 보이길 바랍니다!');
        break;
}

console.log('-------------------------------------------------------------------');

/** 1-3. 반복문 */
/*
아래의 for문으로 작성 된 script를 while문으로 변경한다.
*/
//for문 code
for (var i = 0; i < 10; i++) {
    console.log('number' + (i+1));
}
//while문 code
// 코드 작성
var i =  0;
while(i < 10){
    console.log('number' + (i+1));
    i++;
}

console.log('-------------------------------------------------------------------');

