

// 문자열 을 숫자로 변경하는 코드를 수행

// 숫자만 작성된 문자열("123")을
// 진짜 숫자로 바꾸는 방법
// -> Number("123")


// 아이디가 "calcResult"인 요소를
// 내부 글자(innerText, html 요소 내용)로 대입하기

document.getElementById('calcResult').innerHTML = result;


function plus() {
    document.getElementById('calcResult').innerHTML = Number(document.getElementById('num1').value) + Number(document.getElementById('num2').value);
}
function minus() {
    document.getElementById('calcResult').innerHTML = Number(document.getElementById('num1').value) - Number(document.getElementById('num2').value);
}
function multifly() {
    document.getElementById('calcResult').innerHTML = Number(document.getElementById('num1').value) * Number(document.getElementById('num2').value);
}
function division() {
    document.getElementById('calcResult').innerHTML = Number(document.getElementById('num1').value) / Number(document.getElementById('num2').value);
}
function rest() {
    document.getElementById('calcResult').innerHTML = Number(document.getElementById('num1').value) % Number(document.getElementById('num2').value);
}


function totalFn() {
    let val1 = document.getElementById('newNum1').value;
    let val2 = document.getElementById('newNum2').value;
    let val3 = document.getElementById('newNum3').value;
    document.getElementById('total').innerHTML = Number(val1) + Number(val2) + Number(val3);
}



function check() {
    // 함수 밖, 안은 구분되는 공간으로 생각하면 된다.
    // 밖에 작성한 변수 count, 안에 작성한 count는 서로 다른 변수
    var count = 100;

    //컴퓨터에게 연산은 +-*/ 뿐만 아니라 코드를 하나하나 실행하는 것들이 연산이다.

    //전위 연산(++count ..) -> 다른 연산보다 먼저 수행
    console.log("++connt", ++count);
    

    let a = 10;
    let b = 5;
    let c = ++a * b--;
    // a = 11 / 
    // b = 4 
    // c = 55
    console.log(a,b,c)

}


function printJSObject() {
    let userName = document.getElementById('userName').value;
    let userAge = document.getElementById('userAge').value;
    let userGender = document.getElementById('userGender').value;

    let result = {이름: userName, 나이: userAge, 성별: userGender};
    console.log(result);
}