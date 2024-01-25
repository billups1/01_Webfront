x = 0;
y = 0;

document.addEventListener('keydown', function(e) {

    console.log(e.key);

    if (e.key == 'ArrowDown') {
        y+=5;
        document.querySelector('#bomberman').style.top = y + 'px';
    } else if (e.key == 'ArrowUp') {
        y-=5;
        document.querySelector('#bomberman').style.top = y + 'px';
    } else if (e.key == 'ArrowLeft') {
        x-=5;
        document.querySelector('#bomberman').style.left = x + 'px';
    } else if (e.key == 'ArrowRight') {
        x+=5;
        document.querySelector('#bomberman').style.left = x + 'px';
    } else if (e.key == 'x') {
        document.querySelector('#ground').innerHTML += '<img src="../../images/boom.png" id="boom">';
        document.querySelector("#ground > img:last-child").style.top = y+'px';
        document.querySelector("#ground > img:last-child").style.left = x+50+'px';
    }
})