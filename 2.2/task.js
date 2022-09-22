window.addEventListener('DOMContentLoaded', ()=> {

    function roator(roatorActiveTag){

        let allRouters = Array.from(document.querySelectorAll('.rotator__case'))
        let currentSpeed = Number(document.querySelector('.rotator__case_active').getAttribute('data-speed'))

        allRouters.forEach((item)=>{

            let itemColor = item.getAttribute('data-color')
            item.style.color = itemColor
        });

        let roatorInterval = setInterval(function intervalR() {

            let roatorActive = document.querySelector(`.${roatorActiveTag}`)
            let roatorSpeed = Number(roatorActive.getAttribute('data-speed'))
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
            clearInterval(roatorInterval)
            roatorInterval = setInterval(intervalR, roatorSpeed)

        }, currentSpeed)   
    };

    roator('rotator__case_active')

});