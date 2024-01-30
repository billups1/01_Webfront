
const createBox = document.querySelector('#createBox'); //button
const container = document.querySelector('.container'); //div

// 버튼 클릭 시 div.box(div 중 box 클래스를 가지고 있는 것) 생성 -> container 마지막 자식으로 추가


createBox.addEventListener('click', () => {

    // 1. div 요소 생성
    const box = document.createElement('div'); // <div></div> 생성
    console.log(box);
    
    // 2. 만들어진 div 요소에 클래스 추가
    box.classList.add("box");
    console.log(box);

    // 3. container의 마지막 자식으로 div 요소 추가
    container.append(box);
    
    // 4. input요소 생성
    const input = document.createElement('input');
    input.type = "text";

    // 5. box의 마지막 자식으로 추가
    box.append(input);

})

// 요소.classList : 요소의 클래스 목록을 반환
// -> 클래스 존재여부, 추가, 제거 등을 할 수 있음
// -> 요소 목록이 배열 형식으로 반환

// 요소.classList.contains("클래스명")
// -> 클래스가 있으면 true, 없으면 false

//  요소.classList.add("클래스명")
//  요소.classList.remove("클래스명")


// innerHtml로 요소 추가하기
const innerHtmlBox = document.querySelector('#innerHTMLBox');
innerHtmlBox.addEventListener('click', () => {
    container.innerHTML += `
        <div class="box">
            <input type="text">
        </div>
    `
})


