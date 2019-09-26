var btn = document.getElementsByClassName('btn-action')[0];
var close = document.getElementsByTagName('span')[0];

if(typeof window.addEventListener === 'function') {
    btn.addEventListener('click', showContent);
    close.addEventListener('click', hideContent);
} else if(typeof window.attachEvent === 'function') {
    btn.addEventListener('click', showContent);
    close.addEventListener('click', hideContent);
}

function showContent() {
    document.getElementById('modal-box').style.display = 'block';
}

function hideContent() {
    document.getElementById('modal-box').style.display = 'none';
}