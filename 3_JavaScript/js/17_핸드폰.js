const keyPad = document.querySelectorAll("#keyPad > div");
let inputNumber = document.querySelector('#numberDisplay > p');

keyPad.forEach((k) => {
    k.addEventListener("click", e => {
        inputNumber.innerText += e.target.getAttribute('value');
    })
})

document.querySelector('#addBtn').addEventListener('click', () => {
    if (isNaN(Number(inputNumber.innerText)) || !inputNumber.innerText.startsWith("010")) {
        alert("올바른 번호를 입력하세요.");
        inputNumber.innerText = '010';
    } else {
        const div = document.createElement('div');
        div.classList.add("numberItem");

        const number = document.createElement('div');
        number.innerText = inputNumber.innerText;


        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add("buttonContainer");

        const starMark = document.createElement('div');
        starMark.innerText = "☆";
        
        const deleteMark = document.createElement('div');
        deleteMark.innerHTML = "&times;";

        buttonContainer.append(starMark);
        buttonContainer.append(deleteMark);
        buttonContainer.style.display = "flex";

        starMark.addEventListener('click', () => {
            if (starMark.classList.contains("starMarkYellow")) {
                starMark.classList.remove("starMarkYellow");
                starMark.innerText = "☆";
            } else {
                starMark.classList.add("starMarkYellow");
                starMark.innerText = "★";
            }
        })

        deleteMark.addEventListener('click', () => {
            deleteMark.parentElement.parentElement.remove();
        })
        
        div.append(number);
        div.append(buttonContainer);
        
        document.querySelector("#numberList").append(div);
        inputNumber.innerText = '010';
    }
})

document.querySelector('#resetBtn').addEventListener('click', () => {
    inputNumber.innerText = '010';
})