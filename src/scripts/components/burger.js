const burgerBtnOpen = document.querySelector('.header__catalog-btn');
const burgerBtnClose = document.querySelector('.main-menu__close');
const mainMenuEl = document.querySelector('.main-menu');

const openBurger = () => {
    mainMenuEl.classList.add('main-menu--active');

    burgerBtnClose.addEventListener('click', onBurgerToggler);
};

const closeBurger = () => {
    mainMenuEl.classList.remove('main-menu--active');

    burgerBtnClose.removeEventListener('click', onBurgerToggler);
};

const onBurgerToggler = (event) => {
    event.preventDefault();
    if (mainMenuEl.classList.contains('main-menu--active')) {
        closeBurger();
        return;
    }
    openBurger();
};

const initBurger = () => {
    if(!burgerBtnOpen || !mainMenuEl) {
        return
    }
    burgerBtnOpen.addEventListener('click', onBurgerToggler);
};

export {initBurger};