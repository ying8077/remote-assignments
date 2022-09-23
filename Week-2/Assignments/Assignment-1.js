const banner = document.querySelector('.banner');
const btnShow = document.querySelector('#btn-show');
const wrapHide = document.querySelector('#wrap-2');
wrapHide.style.display = 'none';

banner.addEventListener('click', event => {
    event.target.textContent = "Have a Good Time!";
});

btnShow.addEventListener('click', () => {
    if (wrapHide.style.display === 'none') {
        wrapHide.style.display = 'flex';
    } else {
        wrapHide.style.display = 'none';
    }
});