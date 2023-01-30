const submitMore = document.querySelector('#submit-more');
const formElem = document.querySelector('#wpcf7-f758-p14-o1 form');

window.addEventListener('click', (e) => {
	if (e.target == submitMore) {
		resetForm();
	}
});

function resetForm() {
	formElem.reset();
}
