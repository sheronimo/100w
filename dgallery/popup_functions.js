// Toggle overlay and popup upon clicking a product block
const productBlocks = document.querySelectorAll('.product-block');
productBlocks.forEach((i) => {
	i.addEventListener('click', (e) => {
		e.preventDefault();
		e.stopPropagation();

		addPopup(e.target.closest('.product-block'));
	});
});

window.addEventListener('click', (e) => {
	e.stopPropagation();
	let toggledModals = document.querySelector('.product-modal.toggled');

	if (toggledModals != null) {
		let btnPrevModal = toggledModals.querySelector('.btn-prev-modal');
		let btnNextModal = toggledModals.querySelector('.btn-next-modal');

		// Remove popup and overlay when clicking close button or outside the popup
		if (
			e.target == document.querySelector('.btn-close-modal') ||
			!e.target.closest('.product-modal.toggled')
		) {
			removePopup();
		}

		// Upon previous button click,
		// Hide current popup and overlay
		// Then show previous product's popup and overlay
		if (e.target == btnPrevModal) {
			let getId = e.target.closest('.product-modal.toggled').dataset.modalid;
			let prevElement = document.querySelector(
				'.product-block[data-postid="' + getId + '"]'
			).previousElementSibling;
			if (prevElement != null) {
				removePopup();
				addPopup(prevElement);
			}
		}

		// Upon next button click,
		// Hide current popup and overlay
		// Then show next product's popup and overlay
		if (e.target == btnNextModal) {
			let getId = e.target.closest('.product-modal.toggled').dataset.modalid;
			let nextElement = document.querySelector(
				'.product-block[data-postid="' + getId + '"]'
			).nextElementSibling;
			if (nextElement != null) {
				removePopup();
				addPopup(nextElement);
			}
		}

		// Image switcher in toggled popup thubmnails
		let thumbnails = document.querySelectorAll('.product-modal-thumbs img');
		let mainImage = document.querySelector('.product-modal-main-image');

		thumbnails.forEach((t) => {
			if (e.target == t) {
				mainImage.src = e.target.src;
			}
		});
	}
});

// Universal function for adding popup and overlay
function addPopup(elem) {
	let template = elem.querySelector('.modal-template');
	let clone = template.content.cloneNode(true);

	clone.querySelector('.product-overlay').classList.add('toggled');
	clone.querySelector('.product-modal').classList.add('toggled');

	document.body.appendChild(clone);

	getLinks();
}

// Universal function for removing popup and overlay
function removePopup() {
	document.querySelector('.product-overlay.toggled').remove();
	document.querySelector('.product-modal.toggled').remove();
}

// Parse additional images links
function getLinks() {
	const thumbsContainer = document.querySelector('.product-modal-thumbs');
	let srcString = thumbsContainer.dataset.addimgs;

	// Get length of https links in string
	let strLength = srcString.split('http').length - 1;
	// Split the string into an array
	let srcArr = '';
	if (strLength == 0) return;

	if (strLength == 1) {
		srcArr = [srcString];
	} else if (strLength == 2) {
		srcArr = srcString.split(' and ');
	} else {
		srcArr = srcString.replace('and ', '').split(', ');
	}
	// Create an img tag and set the source
	srcArr.forEach((s) => {
		let imgElem = document.createElement('img');
		imgElem.src = s;
		thumbsContainer.appendChild(imgElem);
	});
}
