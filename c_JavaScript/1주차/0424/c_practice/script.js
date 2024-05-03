// prompt 창으로 입력받은 값은 기본적으로 문자열 타입으로 지정됨

// ! 문제 1
// : 원의 넓이를 구하는 계산
// >> 사용자로 부터 반지름(radius)을 입력받아 
//    , 해당 반지름을 가진 원의 넓이를 콘솔창에 출력
// >> 원의 넓이는 === 원주율(3.14) * 반지름 * 반지름

const PI = 3.14; // 파이 상수 선언

let r = Number(prompt('반지름의 길이를 입력하세요(cm).'));
let area = PI * r * r; // 원의 넓이 계산
console.log(`원의 넓이: ${area}`);

// ! 문제 2
// : 인치값을 센티미터 값으로 변환
// >> 사용자로부터 인지(inch)값을 입력받아
//    , 인치를 센치미터 값으로 변환
// >> 결과 값을 콘솔창에 출력
// >> 1 inch == 2.54 cm

let inches = Number(prompt('인치를 입력하세요.'));
let centimeters = inches * 2.54;
console.log(`${inches}inch는 ${centimeters}cm 입니다.`);