const PI = 3.1406;

console.log(PI);


// 함수 레벨 스코프
// 함수 내에서 선언한 변수는 함수 내에서만 유효하며, 함수 외부에서는 참조할 수 없다.
// 함수 내부에서 선언한 변수는 지역변수, 함수 외부에서 선한한 변수는 전역변수

// 블록 레벨 스코프
// 모든 코드블록 내에서 선언된 변수는 코드블록 내에서만 유효하며, 코드 블록 외부에서는 참조할 수 없다.
// 즉, 코드블록 내부에서 선언한 변수는 지역변수이다.


// 블록 레벨 (let, const)
let foo = 123;



// var는, (함수가 아닌) {}안에서 선언되도 전역변수로 기능함

var test = '123';
{
    var test = '456';
}

console.log(test); // 456


// typeOf 연산자: 변수/값의 자료형을 클릭하는 연산자
// undifined: 정의되지 않은 변수 / 값이 아직 대입되지 않았다.

let undef;

console.log("undef: ",undef);
console.log("undef: ",undef, typeof undef); // undef:  undefined undefined



// JS 객체 
// 값을 K:V 형식으로 여러개 저장하는 형태



// 함수
// 작성법
// const 변수명 = function() {};
// 변수명 = 함수명

const sumfn = function(a, b) {
    return a + b;
};

console.log(typeof sumfn);