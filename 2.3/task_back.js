function checkActiveFont(el){

    let fontSelect = Array.from(document.querySelectorAll('.font-size'))
    let dataAtr = el.getAttribute('data-size')

    if (el) {

        fontSelect.forEach((item)=> item.classList.remove('font-size_active'))
        el.classList.add('font-size_active')
    }
    else if (dataAtr != 'big' && dataAtr != 'small') {

        fontSelect.forEach((item)=> item.classList.remove('font-size_active'))
        el.classList.add('font-size_active')
    };
};


function checkColor(el){

    let colorSelWrap = document.querySelector('.book__control_color')
    let colorSelect = Array.from(colorSelWrap.querySelectorAll('.color'))
    let dataAtr = el.getAttribute('data-text-color')

    if (el) {
        colorSelect.forEach((item)=> item.classList.remove('color_active'))
        el.classList.add('color_active')

    }
    else if (dataAtr != 'gray' && dataAtr != 'whitesmoke') {
        fontSelect.forEach((item)=> item.classList.remove('font-size_active'))
        el.classList.add('color_active')
    };

};

function checkBg(el) {

    let colorSelWrap = document.querySelector('.book__control_background')
    let colorSelect = Array.from(colorSelWrap.querySelectorAll('.color'))
    let dataAtr = el.getAttribute('data-bg-color')

    if (el) {
        colorSelect.forEach((item)=> item.classList.remove('color_active'))
        el.classList.add('color_active')

    }
    else if (dataAtr != 'gray' && dataAtr != 'black') {
        fontSelect.forEach((item)=> item.classList.remove('font-size_active'))
        el.classList.add('color_active')
    };

};

window.addEventListener('DOMContentLoaded', ()=> {

    let fontControl = document.querySelector('.book__control_font-size')
    let colorControl = document.querySelector('.book__control_color')
    let bgControl = document.querySelector('.book__control_background')
    let book = document.querySelector('.book')

    bgControl.addEventListener('click', (e)=> {

        e.preventDefault()
        let target = e.target
        let targetAtr = target.getAttribute('data-bg-color')


        if (targetAtr == 'black') {

            checkBg(target)
            book.classList.add('book_bg-black')
            book.classList.remove('book_bg-gray')
            book.classList.remove('book_bg-white')
        }
        else if (targetAtr == 'gray') {

            checkBg(target)
            book.classList.add('book_bg-gray')
            book.classList.remove('book_bg-black')
            book.classList.remove('book_bg-white')
        }
        else {

            checkBg(target)
            book.classList.add('book_bg-white')
            book.classList.remove('book_bg-black')
            book.classList.remove('book_bg-gray')
        };


    });


    colorControl.addEventListener('click', (e)=> {

        e.preventDefault()
        let target = e.target
        let targetAtr = target.getAttribute('data-text-color')


        if (targetAtr == 'black') {

            checkColor(target)

            book.classList.add('book_color-black')
            book.classList.remove('book_color-gray')
            book.classList.remove('book_color-whitesmoke')
        }
        else if (targetAtr == 'gray') {
            checkColor(target)
            book.classList.add('book_color-gray')
            book.classList.remove('book_color-black')
            book.classList.remove('book_color-whitesmoke')
        }
        else {
            checkColor(target)

            book.classList.add('book_color-whitesmoke')
            book.classList.remove('book_color-black')
            book.classList.remove('book_color-gray')
        };
    });

    fontControl.addEventListener('click', (e)=>{

        e.preventDefault()
        let target = e.target
        
        if (target && target.classList.contains('font-size_big')) {

            checkActiveFont(target)
            book.classList.add('book_fs-big')
            book.classList.remove('book_fs-small')
        }
        else if (target && target.classList.contains('font-size_small')) {

            checkActiveFont(target)
            book.classList.add('book_fs-small')
            book.classList.remove('book_fs-big')
        }
        else {
            checkActiveFont(target)
            book.classList.remove('book_fs-big')
            book.classList.remove('book_fs-small')
        };
    });


});