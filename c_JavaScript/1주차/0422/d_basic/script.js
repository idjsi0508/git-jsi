// 자바스크립트 기본 용어

//! 1. (표현)식 & 문(장)

// (표현)식
// : 자바스크립트 값을 만들어내는 간단한 코드 집합
// : 연산식 뿐만 아니라 실제 값(데이터), 함수를 실행하는 것도 식

// 3 + 5 (연산식)
// "안녕하세요" (문자열)
// 7 (숫자)
// console.log(); - 식

// 문장(statement: 진술, 선언)
// : 명령, 문장 끝에는 세미콜론(;)을 붙이거나 줄바꿈을 넣어서 문장의 종결을 구분
// : 하나 이상의 표현식이 모이면 문장

// if문, switch문 등등 문으로 끝나는 키워드들은 statement의 문장에서 나온 의미
let x = 3 + 5; // (문장)
if (x > 0) console.log(x);

//! 2. 키워드 & 식별자

// 키워드(예약어)
// : 자바스크립트가 처음 만들어질 때 정해놓은 특별한 의미가 있는 단어

//  var, let, const - 변수 선언
// function - 함수 선언
// if, else, while, for - 제어문
//  return, continue, break

// 식별자
// : 개발자가 자바스크립트의 변수, 함수, 속성 등을 구별하려고 이름 붙인 특정 단어를 의미

//? 식별자 명명규칙 (암기)
// 키워드(예약어) 사용 X
// 숫자로 시작 X
// 특수 문자는 _(언더 스코어), $(달러) 만 허용
// : 식별자 이름 시작으로 언더 스코어는 사용하지 않는 것을 권장
// 공백 문자 사용 X

// 알파벳(영어)을 사용하는 것이 관례
// sum = 3 + 5 와 같이 a, b 처럼 의미 없는 단어보다 의미 있는 단어 사용을 권장

//? 식별자 종류별 명명 규칙
// 클래스명: 항상 대문자로 시작
// 변수, 인스턴스, 함수, 메소드 명: 항상 소문자로 시작
// 여러 단어로 이루어진 식별자는 각 단어의 첫 글자를 대문자로 시작

// EX) updateName, calculateArea, myVariable

// 식별자 뒤에 소괄호 X: 변수(단독 사용), 속성(다른 식별자와 사용)
// 식별자 뒤에 소괄호 O: 함수(단독 사용), 메소드(다른 식별자와 사용)

//! 3. 출력
// : 자바스크립트의 실행 결과를 웹 브라우저에 표시해야 할 때 사용

//? 3-1. 알림 창 출력 (alert: 알리다, 경고하다)
// (대화상자)

// alert()함수 사용
// : 소괄호 안에 출력할 메시지를 입력(매개변수, parameter)
// : 메시지는 문자로써 따옴표('') 안에 작성
// : alert('')창에 뜨는 확인 버튼은 기능 X
alert('Hello World');
alert('알림 창 출력하기.');

//? 3-2. 확인 창 출력하기 (confirm: 확인하다)
// : 사용자가 [확인] | [취소] 버튼 중에서 직접 클릭
// : 사용자가 선택한 결과(동작)에 맞게 프로그램을 구현

// confirm('메시지')함수 사용
confirm('로그인 하시겠습니까?');

//? 4-3. 프롬프트 창에서 입출력받기
// : 텍스트 필드가 있는 작은 창
// : 간단한 메시지 입력 가능
//   , 해당 내용을 가져와서 프로그램에서 사용 가능

// prompt()함수 사용
// - prompt('메시지');
// - prompt('메시지', '기본값');
//   기본값- input의 placeholder와 같은 기능
let userName = prompt('이름을 입력하세요.', 'EX) 홍길동');
alert(userName);

//? 4-4. 웹 브라우저 화면에 출력
// : 브라우저 화면에서 결괏값 확인하는 용도의 출력

// document(웹 문서)에서 괄호 안의 내용을 write(표시)하는 명령문
// 괄호 안에는 실제 웹 브라우저 화면에 표시할 내용(HTML 태그 사용 가능), 어떤 결괏값이 저장된 변수 삽입 가능
// document.write();

document.write('안녕하세요.');
document.write('<h1>자바스크립트 출력</h1>');

// 사용자로 부터 입력받은 내용과 변수를 섞어서 나타낼 수도 있음.
let user = prompt('이름을 입력해주세요.')
// + 더하기 기호는 숫자 이외의 연산에서 연결 연산자(붙여줌)
document.write(user + '님 반갑습니다.');

//? 4-5. 콘솔 창에 출력
// : 개발자 도구(f12)의 콘솔 창에 내용을 출력

// console.log()를 사용
console.log('콘솔창에 출력합니다.');

//! 프로그래밍 언어
// 한글: 나는 너를 사랑해 (주어 목적어 동사)
// 영어: I love you (주어 동사 목적어)

// document: 객체-실행될 주체
// write: 매서드-동작
// ('안녕'): 매개변수
// 프로그래밍 언어: document.write('안녕');