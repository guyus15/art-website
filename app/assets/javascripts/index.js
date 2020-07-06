// Code controlling the index webpage.

document.addEventListener('turbolinks:load', () => {
    const current = document.querySelector('#current');
    const imgs = document.querySelectorAll('.imgs img');
    const opacity = 0.4;
    
    imgs[0].style.opacity = opacity;

    imgs.forEach(img => img.addEventListener('click', imgClick));


   function imgClick(e){
    imgs.forEach(img => (img.style.opacity = 1));

    if(current.src != e.target.src){
        current.src = e.target.src;
        current.classList.add('fade-in');
    }
    
    e.target.classList.add('throb');

    setTimeout(() => current.classList.remove('fade-in'),500);
    setTimeout(() => e.target.classList.remove('throb'),200);

    e.target.style.opacity = opacity;
}
});
