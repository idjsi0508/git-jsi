//! 문제 1

// 여러 개의 데이터 타입 출력
// 사용자로부터 이름과 나이를 입력받아 각각의 데이터 타입을 콘솔에 출력
let myName = prompt('이름을 입력해주세요.')
let myAge = Number(prompt('나이를 입력해주세요'))

console.log(myName);
console.log(myAge);

// : 출력 결과
// 이름의 타입: string
// 나이의 타입: number
console.log('이름의 타입:', typeof myName);
console.log('나이의 타입:', typeof myAge);

//! 문제 2
// 사용자로부터 받은 두 숫자의 합을 계산하여 출력하는 프로그램을 작성 
// >> 두 숫자를 저장하는 변수는 변하지 않는 값이므로 상수로 선언
// >> 두 숫자의 합은 템플릿 문자열 내에서 계산

const num1 = Number(prompt('1번 숫자를 입력해주세요'))
const num2 = Number(prompt('2번 숫자를 입력해주세요'))

console.log(`${num1}, ${num2} 입력시
두 수의 합은 ${num1 + num2}입니다.`);

// 위에 프롬포트에 Number을 주지 않고 밑처럼 가능
// console.log(`${num1}, ${num2} 입력시
// 두수의 합은 ${Number(num1) + Number(num2)}입니다.`);

// : 출력결과
// 8, 2 입력 시
// 두 수의 합은 10입니다.