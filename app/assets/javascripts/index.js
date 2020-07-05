// Code controlling the index webpage.


const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.4;

imgs[1].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e){
    console.log("Clicked");

    imgs.forEach(img => (img.style.opacity = 1));

    current.src = e.target.src;

    current.classList.add('fade-in');

    setTimeout(() => current.classList.remove('fade-in'),500);

    e.target.style.opacity = opacity;
}