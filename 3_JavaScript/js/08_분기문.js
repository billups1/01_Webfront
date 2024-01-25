function check4() {

    for (let i = 1; i < 4; i++) {
        let string = '';
        for (let j = 1; j < 10; j++) {
            if (j % 4 == 0) continue;
            string += j;
        }
        console.log(string);
    }
}