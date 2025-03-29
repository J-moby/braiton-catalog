const locationBtn = document.querySelector('.location__city');
const locationBtnList = document.querySelectorAll('.location__sublink');
const locationCityName = document.querySelector('.location__city-name');

let currentCity = { name: 'Оренбург', id: 0 };

const saveCityToLocalStorage = (city, cityId) => {
    localStorage.setItem('selectedCity', city);
    localStorage.setItem('selectedCityId', cityId);
}

const openLocationMenu = () => {
    locationBtn.classList.add('location__city--active');

    locationBtnList.forEach(button => {
        button.addEventListener('click', onLocationCitySelect);
    });
}

const closeLocationMenu = () => {
    locationBtn.classList.remove('location__city--active');

    locationBtnList.forEach(button => {
        button.removeEventListener('click', onLocationCitySelect);
    });
}

const toggleLocationMenu = () => {
    if (locationBtn.classList.contains('location__city--active')) {
        closeLocationMenu();
        return;
    }
    openLocationMenu();
}

const onLocationMenuToggler = (event) => {
    event.preventDefault();
    toggleLocationMenu();
}

const onLocationCitySelect = (event) => {
    const selectedCity = event.target.textContent;
    const cityId = Array.from(locationBtnList).indexOf(event.target);
    locationCityName.textContent = selectedCity;
    currentCity = { name: selectedCity, id: cityId };
    saveCityToLocalStorage(selectedCity, cityId);
    closeLocationMenu();
}

const initCurrentCity = () => {
    const savedCity = localStorage.getItem('selectedCity');
    const savedCityId = localStorage.getItem('selectedCityId');

    if (savedCity) {
        locationCityName.textContent = savedCity;
        currentCity = { name: savedCity, id: savedCityId };
        return;
    }
    const currentCityName = locationBtn.textContent.trim();
    const currentCityId = Array.from(locationBtnList).indexOf(locationBtn);
    saveCityToLocalStorage(currentCityName, currentCityId);
    currentCity = { name: currentCityName, id: currentCityId };
}

const initLocationMenu = () => {
    initCurrentCity();
    locationBtn.addEventListener('click', onLocationMenuToggler);
}

export { initLocationMenu, currentCity, saveCityToLocalStorage };