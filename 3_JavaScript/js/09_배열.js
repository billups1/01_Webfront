function check6() {
    let answer = [];
    let count = 2;
    for (let i = 0; i < 5; i++) {
        answer[i] = [];
        for (let j = 0; j < 5; j++) {
            answer[i][j] = count;
            count += 2;
        }
    }
    console.log(answer);
}