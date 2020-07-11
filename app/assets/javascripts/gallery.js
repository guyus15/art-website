document.addEventListener('turbolinks:load', () => {
    if(window.location.pathname =="/gallery"){
        const imgs = document.querySelectorAll('.imgs img');
        
        imgs.forEach(img => img.addEventListener('click', imgClick));



        function imgClick(e){
            var modal = e.target.parentNode.querySelector('div .modal');
            modal.classList.add("is-active");
         
            e.target.classList.add('throb');
            setTimeout(() => e.target.classList.remove('throb'),200);

            const exitBtns = document.querySelectorAll('button');
            exitBtns.forEach(btn => btn.addEventListener('click', exitModal));

            function exitModal(e){
                e.target.parentNode.classList.remove("is-active");
            }
        }

        
    }
});