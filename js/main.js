var navResponsive = document.querySelector('.menu-responsive');
var menu = document.querySelector('.menu > ul');
var isHidden = true;

navResponsive.addEventListener('click', () => {
    if (isHidden) {
        menu.style.display = 'flex';
        isHidden = false;
    }else{
        isHidden = true;
        menu.style.display = 'none';
    }
});

window.addEventListener('resize', () => {
    var w = window.innerWidth;
    if (w >= 769 && menu.style.display == "none") {
        menu.style.display = '';
    }
});

window.addEventListener('DOMContentLoaded', () => {
    alert(`Ancho: ${window.innerWidth}px | Alto: ${window.innerHeight}px`);
});