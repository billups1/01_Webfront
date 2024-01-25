const body = document.querySelector('body');

body.addEventListener('keydown', function(e) {
    document.querySelector('#key' + e.key.toUpperCase()).style.backgroundColor = 'red';
})

body.addEventListener('keyup', function(e) {
    document.querySelector('#key' + e.key.toUpperCase()).style.backgroundColor = 'white';
})