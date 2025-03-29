const accordionBtnEls = document.querySelectorAll('.accordion__btn');
const accordionEl = document.querySelector('.accordion');

const openAccordion = (el) => {
    closeAccordion();
    el.target.classList.add('accordion__btn--active');
};

const closeAccordion = () => {
    accordionBtnEls.forEach(el => {
        el.classList.remove('accordion__btn--active');
    })
};

const toggleAccordion = (el) => {
    if (el.target.classList.contains('accordion__btn--active')) {
        closeAccordion();
        return
    }
    openAccordion(el);
};

const initAccordion = () => {
    if (!accordionEl) {
        return
    };
    accordionBtnEls.forEach(el => {
        el.addEventListener('click', toggleAccordion)
    })
};

export { initAccordion };