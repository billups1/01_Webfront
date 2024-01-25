

let output = document.getElementById('output');
let amount = document.getElementById('amount');


let balance = 10000;

output.innerText = balance;

function deposit() {

    const password = prompt("비밀번호를 입력하세요.");

    if (password == null) {
        alert("비밀번호가 일치하지 않습니다");
    } else if (amount.value.length == 0) {
        alert("금액이 입력되지 않았습니다")
    } else {
        if (password == '1234') {
            balance += Number(amount.value);
            output.innerHTML = balance;
            amount.value = "";
        } else {
            alert("비밀번호가 일치하지 않습니다");
        }
    }
}

function withdrawal() {

    const password = prompt("비밀번호를 입력하세요.");

    if (password == null) {
        alert("비밀번호가 일치하지 않습니다");
    } else if (amount.value.length == 0) {
        alert("금액이 입력되지 않았습니다")
    } else {
        if (password == '1234') {
            if (balance < amount.value) {
                alert("출금 금액이 잔액보다 클 수 없습니다")
            } else {
                balance -= Number(amount.value);
                output.innerHTML = balance;
                amount.value = "";
                alert(`${amount.value}원이 출금 되었습니다. 남은 잔액 : ${balance}원`)
            }
        } else {
            alert("비밀번호가 일치하지 않습니다");
        }
    }

}

function test() {


}