window.addEventListener('DOMContentLoaded', ()=> {

    function roator(roatorActiveTag){

        let allRouters = document.querySelectorAll('.rotator__case')

        allRouters.forEach((item)=>{

            let itemColor = item.getAttribute('data-color')
            item.style.color = itemColor

        });

        setInterval(()=>{

            let roatorActive = document.querySelector(`.${roatorActiveTag}`)
            let nextRoator = roatorActive.nextElementSibling       

            if (nextRoator != null){

                roatorActive.classList.remove('rotator__case_active')
                nextRoator.classList.add('rotator__case_active')
            }
            else {
                
                document.querySelector('.rotator__case_active').classList.remove('rotator__case_active')
                roatorActive = document.querySelector('.rotator').firstElementChild
                roatorActive.classList.add('rotator__case_active')
            };
        }, 1000)   
    };

    roator('rotator__case_active')

});