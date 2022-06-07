function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu_button');
    let links = menu.find('.burger-menu_link');
    let overlay = menu.find('.burger-menu_overlay');

    button.on('click',(e) => {
        console.log(111)
        e.preventDefault();
        toggleMenu();
    });
    links.on('click',() => toggleMenu());
    overlay.on('click',() => toggleMenu());

    function toggleMenu() {
        menu.toggleClass('burger-menu_active');

        if (menu.hasClass('burger-menu_active')) {
            $('body').css('overflow','hidden');
        } else {
            $('body').css('overflow','visible');
        }

    }
}

$(document).ready(() => {
    burgerMenu( '.burger-menu');

    const openPopUp = document.getElementById('open_popup');
    const closePopUp = document.getElementById('popup-close');
    const popUp = document.getElementById('popup');

    openPopUp.addEventListener('click', function(e){
        e.preventDefault();
        popUp.classList.add('active');
    })

    closePopUp.addEventListener('click', () => {
        popUp.classList.remove('active')
    })
});

