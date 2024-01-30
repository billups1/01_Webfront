const add = document.querySelector("#add");
const calc = document.querySelector("#calc");
const container = document.querySelector(".container");

add.addEventListener('click', () => {
    const box = document.createElement('div');
    box.classList.add("row");

    const input = document.createElement('input');
    input.classList.add("input-number");
    input.type = "number" // = input.setAttribute("type", "number");
    box.append(input);

    const span = document.createElement('span');
    span.classList.add("remove-row");
    span.innerHTML = "&times;"
    span.addEventListener('click', (e) => {
        e.target.parentElement.remove();
    })
    box.append(span);

    container.append(box);

})

calc.addEventListener('click', () => {
    let count = 0;
    document.querySelectorAll(".input-number").forEach((e) => {
        count += Number(e.value);
    })
    alert(count);
})




