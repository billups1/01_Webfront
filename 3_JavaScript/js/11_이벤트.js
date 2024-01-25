// 인라인 이벤트 모델 확인
function check1 (btn) {

    console.log(btn)

    const bgColor = btn.style.backgroundColor;

    // 버튼이 클릭될 때마다 pink <-> yellow 변경

    if (bgColor == 'yellow') {
        btn.style.backgroundColor = 'pink';
    } else if (bgColor == 'pink') {
        btn.style.backgroundColor = 'yellow';
    }

}

// 고전 이벤트 모델 확인
const test1a = document.querySelector("#test1-1");

test1a.onclick = function() {
    alert("고전 이벤트 모델 확인 버튼 클릭됨")
}

// 고전 이벤트 모델 제거

// #test1-2 버튼 클릭 시
// #test1-1의 onclick 이벤트 리스너의 이벤트 핸들러 제거하기

document.querySelector("#test1-2").onclick = function() {

    // 기존 onclick의 이벤트 핸들러를 null로 덮어씌움 (이벤트 제거)
    document.querySelector("#test1-1").onclick = null;
    alert("이벤트 제거됨");

}

// 고전 이벤트 모델 단점

const test1c = document.querySelector("#test1-3");

test1c.onclick = function() {
    test1c.style.backgroundColor = "red";
}

// 6개월 후 ..

test1c.onclick = function() {
    test1c.style.color = "white";
}

// onclick에 저장된 값이 덮어씌워지면서
// 이전 코드(배경색 red)가 사라지는 문제 발생



// 표준 이벤트 모델 확인
const test2 = document.querySelector("#test2");

test2.addEventListener("click", function() {
    let curr = test2.style.opacity;
    console.log(curr); // '' 빈값으로 나옴, default는 1인데 설정해 주지 않아서

    //설정 1로 해줘야 함
    if (curr == '') {
        test2.style.opacity = 1;
        curr = 1;
    }

    test2.style.opacity = curr - 0.1;

    if (curr == 0) {
        test2.style.opacity = 1;
        curr = 1;
    }
});

let count = 0;
test2.addEventListener('click', function() {
    count++;

    // 표준 이벤트 모델의 이벤트 핸들러 안에서 this
    // == 이벤트가 발생한 요소

    this.innerText = count;

})

const test3input = document.querySelector('#input3')
test3input.addEventListener('keyup', function(e) {
    // e: 이벤트 객체(발생한 이벤트에 대한 정보를 담은 객체)
    // e.key : 입력된 키
    console.log("e", e);
    if (e.key == "Enter") {
        document.querySelector('#box3').style.backgroundColor = test3input.value;
        test3input.value = "";
    }
})

const box3 = document.querySelector('#box3');
box3.addEventListener('click', function(e) {
    console.log(e);
    console.log(e.target.style.backgroundColor);
    // e.target -> 자주 씀
})