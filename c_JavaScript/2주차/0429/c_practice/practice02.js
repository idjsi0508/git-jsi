// ! 기본 매게변수 연습 문제
// 윤년 확인 함수
// 기본 매개변ㅅ를 사용하여 인수가 없을 경우, 올해의 윤년 여부를 확인

// new Date(): YYYY-MM-DD HH:mm:ss 반환
function isLeapYear(year = new Date().getFullYear()) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log(isLeapYear()); // 기본값이 이번년도로 설정되어 있기 때문에 true값 반환
console.log(isLeapYear(2023)); // false

// ! 나머지 매개변수 연습문제
// 최대값 찾기 함수
function findMax(...numbers) {
  if (numbers.length === 0) {
    // 배열이 인자로 전달되지 않은 경우k
    return '숫자가 입력되지 않았습니다.'
  }
  return Math.max(...numbers);
}

console.log(findMax(10, 20, 30, 40, 50)); // 50
console.log(findMax()); 