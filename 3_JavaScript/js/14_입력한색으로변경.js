
document.querySelector('#changeButton').addEventListener('click', function () {
    for (let i = 0; i < document.querySelectorAll('.color-input').length; i++) {
        document.querySelectorAll('.box')[i].style.backgroundColor = document.querySelectorAll('.color-input')[i].value;
    }
})