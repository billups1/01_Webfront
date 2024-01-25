// 클래스 접근 테스트

function classTest() {

    // .cls-test 요소 모두 얻어오기
    const divs = document.getElementsByClassName('cls-test');
    // 유사 배열?
    // 배열처럼 index, length를 가지고 있으나
    // 배열 전용 기능(메서드)를 제공하지 않음
    // pop(), push(), ...
    console.log(divs);
    divs[0].style.backgroundColor = "red";
    divs[1].style.backgroundColor = "green";
    divs[2].style.backgroundColor = "blue";

}

function tagNameTest() {
    const lis = document.getElementsByTagName('li');

    for(let i = 0; i < lis.length; i++) {
        lis[i].style.backgroundColor = lis[i].innerText;
    }
}

function nameTest() {
    const hobbyList = document.getElementsByName("hobby");

    // console.log(hobbyList);
    let str = '';
    let count = 0;

    // input요소.checked -> 요소가 체크되어 있으면 true, 아님 false 반환
    // input요소.checked = true -> 해당 요소를 체크
    // input요소.checked = false -> 해당 요소를 체크 해제

    for(let i = 0; i < hobbyList.length; i++) {
        if (hobbyList[i].checked) {
            str += hobbyList[i].value + " ";
            count++;
        }
    }


    document.getElementById('name-div').innerHTML = 
    `${str} <br><br> 개수 : ${count}`;

}


function cssTest(){ 


// 요소 1개
// 1) document.querySelector("CSS선택자");
// -> 선택자가 선택한 요소 중 첫번째 요소를 반환

// 요소 n개
// 2) document.querySelectorAll("CSS선택자");
// -> 선택한 요소 모두를 배열(유사배열) 형태로 반환

// target-div 속성 값이 "css-div" 요소에 접근
    const container = document.querySelector('[target-div="css-div"]')

    container.style.border = "10px solid red";

    // document.querySelector('[target-div="css-div"] > div:first-child').innerText = "CSS선택자로 선택해서 값 변경됨";
    document.querySelector('[target-div="css-div"] > div').innerText = "CSS선택자로 선택해서 값 변경됨";
    // querySelector가 첫번째 요소만 선택하기 때문에, :first-child 빼도 첫번째 것만 선택됨

    document.querySelector('[target-div="css-div"] > div:last-child').innerText = "첫번째 요소가 아니면 querySelector() 특징 활용 못함";


    // 모든 자식 div 한번에 선택(배열)
    const divList = document.querySelectorAll('[target-div = "css-div"] > div');

    divList[0].style.fontFamily = "궁서";
    divList[1].style.fontSize = "20px";

    for(let i = 0; i < divList.length; i++) {
        divList[i].onclick = function() {
            alert(`${i}번째 요소입니다`);
        }
    }

}


function readValue() {
    
}