const sumfn = function(a, b) {
    return a+b;
}

const arrowList = document.querySelectorAll(".arrow");

arrowList[0].addEventListener('click', () => {
    alert("화살표 함수 기본 형태");
})


function print3(otherFn) { //함수를 파마리터로 전달받은 것
    const numbers = [1,2,3,4];
    console.log(otherFn(numbers)); // 파라미터로 전달받은 함수
}

arrowList[1].addEventListener('click', e => {

    // e: 이벤트 객체 (모든 이벤트 관련 정보가 담겨있는 객체)
    // e.target: 이벤트가 발생한 요소

    e.target.style.backgroundColor = 'pink';

    print3( arr => { // 익명함수
        let result = 0;

        for (let i = 0; i < arr.length; i++) {
            result += arr[i];
        }

        return result;
    })

})

function twoNumberPlus( otherFn ) {
    const input1 = Number(prompt("첫 번째 값"));
    const input2 = Number(prompt("두 번째 값"));
    alert( otherFn(input1, input2) );
}

arrowList[2].addEventListener('click', () => {  // 매개변수 전달할 것 없어도 () 생략 불가, 오로지 매개변수 하나일 때만 () 생략 가능
    twoNumberPlus((a, b) => a + b );
});

function printObject( otherFn ) {
    const obj = otherFn( "홍길동", 20);
    console.log(`obj.name : ${obj.name}`);
    console.log(`obj.age : ${obj.age}`);
}

arrowList[3].addEventListener('click', () => {
    printObject((name, age) => { //otherFn 규정하는 부분
        return {"name" : name, "age" : age}
    })
});


// 즉시 실행 함수
( () => {
    console.log("즉시 실행 함수입니다.");
    console.log("함수 모양이 좀 어렵죠?")
})()