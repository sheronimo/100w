const carousel = document.querySelector('#logo-carousel .dtq-logo-carousel');
const carouselSettingsObj = JSON.parse(carousel.dataset.settings);
carouselSettingsObj['responsive'].push({
	breakpoint: 500,
	settings: { slidesToShow: 2, slidesToScroll: 2, rows: 2 }
});
carousel.dataset.settings = JSON.stringify(carouselSettingsObj);
