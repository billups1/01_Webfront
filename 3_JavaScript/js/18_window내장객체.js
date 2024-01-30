// window.setTimeout()
document.querySelector("#btn1").addEventListener("click", () => {

    setTimeout(function() {
        alert("3초후 출력");
    }, 3000)
    //window.생략 가능
})

// window.setInterval()

let interval; // setInterval을 저장하기 위한 전역변수

// 현재 시간을 문자열로 반환하는 함수
function currentTime() {
    const now = new Date();

    // let hour = now.getHours();
    // let minute = now.getMinutes();
    // let second = now.getSeconds();

    String(now.getHours()).padStart(2, "0")

    let hour = String(now.getHours()).padStart(2, "0")
    let minute = String(now.getMinutes()).padStart(2, "0")
    let second = String(now.getSeconds()).padStart(2, "0")

    return hour + " : " + minute + " : " + second;
}

function clockFn() {
    const clock = document.getElementById("clock");
    clock.innerText = currentTime();

    interval = setInterval(function() {
        clock.innerText = currentTime();
    }, 1000);
}

clockFn();

// clearInterval
document.querySelector("#stopBtn").addEventListener("click", () => {

    clearInterval(interval);

})