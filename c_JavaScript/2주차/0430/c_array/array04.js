// 함수를 구현하여, 해당 조건의 로직을 작성하고 결과값을 반환
// : 함수의 매개변수는 배열의 값을 사용

//! 문제 1: 배열 합계 구하기
function sumArray(array) {
  let sum = 0;

  // 배열의 모든 요소에 접근하기 위해
  // : for 반복문 + 인덱스 번호
  let length = array.length
  for(let i = 0; i < length; i++) {
    sum += array[i];
  }

  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5])); // 15


//! 문제 2: 특정 수 이상의 요소 필터링
function filterGreaterThanTen(array) {
  let filtered = [];
  let length = array.length;

  for (let i = 0; i < length; i++) {
    if (array[i] > 10) {
      filtered.push(array[i]);
    }
  }

  return filtered;
}

console.log(filterGreaterThanTen([11, 43, 23, 75, 12, 32, 13, 64]));
console.log(filterGreaterThanTen([11, 7, 8, 5, 44]));

//! 문제 3: 배열 요소 검색
// : containsElement 함수 구현
// : 매개변수로 array(배열)와 element(검색값)을 받음
// - 배열의 모든 요소에 접근하는 동안에 element값과 동일한 값이 있는 경우 true를 반환
// - element값과 동일한 값이 없는 경우 false를 반환

function containsElement(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return true;
    }
  }
  return false;
}

console.log(containsElement([1, 2, 3, 4, 5], 7));
console.log(containsElement([1, 2, 3, 4, 5], 3));


