document.addEventListener('turbolinks:load', () => {
    if(window.location.pathname =="/about"){
        mediaObject = document.querySelector('article');

        if(window.innerWidth <500){
            mediaObject.classList.remove('media');
        }

        window.addEventListener('resize', () => {
            console.log(window.innerWidth);

            if(window.innerWidth < 450){
                mediaObject.classList.remove('media');
            }
            else{
                mediaObject.classList.add('media');
            }
        });
    }
});
