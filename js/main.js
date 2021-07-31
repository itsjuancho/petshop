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