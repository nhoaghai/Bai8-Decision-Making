let imgOjb = null;
function init(){
    imgOjb = document.getElementById('myImg');
    imgOjb.style.left = '0px';
    imgOjb.style.position = 'relative'
}
function moveRight(){
    document.getElementById('myImg').style.left = parseInt(imgOjb.style.left) + 10 + 'px';
}
window.onload = init;