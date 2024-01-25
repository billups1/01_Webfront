

function check2() {
    const randomNumber = Math.floor(Math.random()*101);
    console.log(randomNumber);

    if (randomNumber % 2 == 0) {
        alert(`${randomNumber}는 짝수입니다.`)
    } else {
        alert(`${randomNumber}는 홀수입니다.`)
    }
}


// -3 ~ 3 사이 난수를 발생 시켜 양수, 음수, 0 판별
function check3() {
    const randomNumber = Math.floor(Math.random() * 7)-3; //Math.floor 내림

    let message = randomNumber + "은/는 ";

    if (randomNumber == 0) {
        message += "0입니다."
    } else if (randomNumber > 0) {
        message += "양수입니다."
    } else if (randomNumber < 0) {
        message += "음수입니다."
    }

    alert(message);

}


function check4() {

    let inputAge = document.getElementById('inputAge').value;
    console.log(inputAge);
    console.log(inputAge.length);
    
    let message;
    if (inputAge.length == 0) { // input창 입력 안하면 0으로 처리해서 필요
        message = "값을 입력해주세요"
    } else if (inputAge >= 0 && inputAge <=13) {
        message = "어린이"
    } else if (inputAge >= 14 && inputAge <=19) {
        message = "청소년"
    } else if (inputAge >= 20 && inputAge <=150) {
        message = "성인"
    } else {
        message = "잘못 입력 하셨습니다"
    }

    console.log(message);
}