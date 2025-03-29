import { initBurger } from "./components/burger";
import { initLocationMenu } from "./components/location";
import { initAccordion } from "./components/accordion";

window.addEventListener('DOMContentLoaded', () => {
    initLocationMenu();
    window.addEventListener('load', () => {
        initBurger();
        initAccordion();
    })
});
