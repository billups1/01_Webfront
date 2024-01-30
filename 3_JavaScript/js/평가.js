let testBtn = document.querySelector("#testBtn");
let result = document.querySelector("#result");
let resultContainer = document.querySelector("#resultContainer");

testBtn.addEventListener('click', () => {
    let width = document.querySelector("#width").value;
    let height = document.querySelector("#height").value;
    let fontSize = document.querySelector("#fontSize").value;

    let boldList = document.querySelectorAll("[name=bold]");
    let bold;
    for (let i = 0; i < boldList.length; i++) {
        if (boldList[i].checked) {
            bold = boldList[i].value;
            break;
        }
    }

    let color = document.querySelector("#color").value;
    let backgroundColor = document.querySelector("#backgroundColor").value;

    let alignWidthList = document.querySelectorAll("[name=alignWidth]");
    let alignWidth;
    for (let i = 0; i < alignWidthList.length; i++) {
        if (alignWidthList[i].checked) {
            alignWidth = alignWidthList[i].value;
            break;
        }
    }

    let alignHeightList = document.querySelectorAll("[name=alignHeight]");
    let alignHeight;
    for (let i = 0; i < alignHeightList.length; i++) {
        if (alignHeightList[i].checked) {
            alignHeight = alignHeightList[i].value;
            break;
        }
    }

    let text = document.querySelector("#text").value;


    resultContainer.innerHTML = "";
    let result = document.createElement('div');
    result.style.border = "solid black";
    result.style.width = width + "px";
    result.style.height = height + "px";
    result.style.color = color;
    result.style.backgroundColor = backgroundColor;
    result.style.display = "flex";
    if (alignHeight == "centerHeight") {
        result.style.alignItems = "center";
    } else if (alignHeight == "bottom") {
        result.style.alignItems = "flex-end";
    }

    let textDiv = document.createElement('div');
    textDiv.innerText = text;
    textDiv.style.fontSize = fontSize + "px";
    textDiv.style.fontWeight = bold;
    textDiv.style.flexBasis = "100%";
    textDiv.style.textAlign = alignWidth;
    result.append(textDiv);

    resultContainer.append(result);

})