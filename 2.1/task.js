function isElementCompletelyInViewPort(element) {

    let elCord= element.getBoundingClientRect(),
        width = document.documentElement.clientWidth,
        height = document.documentElement.clientHeight;

    return ( 
            elCord.bottom <= height
            && elCord.right <= width
            && elCord.left >= 0
            && elCord.top >= 0
        );       
};



window.addEventListener('DOMContentLoaded', ()=>{

    window.addEventListener('scroll', ()=> {

        let revals = Array.from(document.querySelectorAll('.reveal'))

        for (let i = 0; i < revals.length; i++) {

            if(isElementCompletelyInViewPort(revals[i])){
                revals[i].classList.add('reveal_active')
            }
            else {
                revals[i].classList.remove('reveal_active')
            };
        };
    });

});