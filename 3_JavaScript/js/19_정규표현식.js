document.getElementById("btn1").addEventListener('click', () => {

    //정규표현식 객체 생성
    const regExp1 = new RegExp("script");
    // "script"와 일치하는 문자열이 있는지 검사하는 정규표현식

    const regExp2 = /java/;
    // "java"와 일치하는 문자열이 있는지 검사하는 정규표현식

    const str1 = "저희는 지금 javascript를 공부하고 있습니다.";
    const str2 = "jsp(java server page)도 나중에 할겁니다";
    const str3 = "java, java, java";

    console.log(regExp1.test(str1));
    console.log(regExp2.test(str2));
    console.log(regExp1.exec(str1));
    console.log(regExp2.exec(str2));
    // index: 11 => str2가 11번째 글짜부터 시작한다.

})

document.getElementById("btn2").addEventListener('click', ()=> {
    const div1 = document.getElementById("div1");

    // a(일반문자열) : 문자열 내에 a라는 문자열이 존재하는지 검색
    const regExp1 = /a/;
    div1.innerHTML += "/a/, apple : " + regExp1.test("apple") + "<hr>";
    div1.innerHTML += "/a/, price : " + regExp1.test("price") + "<hr>";

    // [abcd] : 문자열 내에 a,b,c,d 중 하나라도 일치하는 문자가 있는지 검색
    const regExp2 = /[abcd]/;
    div1.innerHTML += "/[abcd]/, apple : " + regExp2.test("apple") + "<hr>";
    div1.innerHTML += "/[abcd]/, qwert : " + regExp2.test("qwert") + "<hr>";

    // ^ (캐럿) : 문자열의 시작을 의미
    const regExp3 = /^group/; // 문자열의 시작이 group인지 확인하라
    div1.innerHTML += "/^group/, group100 : " + regExp3.test("group100") + "<hr>"; //true
    div1.innerHTML += "/^group/, 100group : " + regExp3.test("100group") + "<hr>"; //false

    // $ : 문자열의 끝을 의미
    const regExp4 = /group$/;
    div1.innerHTML += "/group$/, group100 : " + regExp4.test("group100") + "<hr>"; //false
    div1.innerHTML += "/group$/, 100group : " + regExp4.test("100group") + "<hr>"; //true

})

// 이름 유효성 검사
const inputName = document.querySelector("#inputName");
inputName.addEventListener('keyup', (e) => {
    
    const span = document.getElementById("inputNameResult");
    
    const regExp = /^[ㄱ-힣]{2,5}$/ // 시작과 끝이 모두 한글로 이루어진 2~5자 사이

    console.log(e.target.value);
    // 화살표 함수의 this는 부모의 스포크 값이 상속된다.
    // function : this는 이벤트가 일어난 객체

    if(e.target.value.length == 0) { // this => 현재 이벤트가 일어나는 요소 : 여기서 input
        span.innerText = "";
        return;
    }

    if (regExp.test(inputName.value)) {
        span.innerText = "유효한 이름입니다."
        span.style.color = "green";
        span.style.fontWeight = "bold";
    } else {
        span.innerText = "이름 형식이 유효하지 않습니다."
        span.style.color = "red";
        span.style.fontWeight = "bold";
    }
})

const regExp = /^\d{6}\-\d{7}&/;  // -는 앞에 백슬래시 붙여야함(이스케이프)


