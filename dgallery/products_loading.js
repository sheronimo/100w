

// "Filtered class" for the ones filtered
// "Sort" simply sorts the array

$(document).ready(function () {
	let products_array = [];

	const container = document.querySelector('.products-grid');
	const productTemplate = document.querySelector('#product-template');

	// First load the products as an array
	[pods name="collection" limit="-1" where="collection_category.name LIKE 'porcelain'"]
	products_array.push({
		name: '{@post_title}',
		era: '{@era}',
		thumb: '{@post_thumbnail_url.medium_large}',
		priceLow: '{@estimate_value_from}',
		priceHigh: '{@estimate_value_to}',
		category: '{@collection_category.name}',
		permalink: '{@permalink}'
	});
	[/pods]

	// Then add them to the markup
	products_array.forEach((p) => {
		let templateClone = productTemplate.content.cloneNode(true).children[0];

		templateClone.querySelector('.product-heading').textContent = p.name;
		templateClone.querySelector('.product-era').textContent = p.era;
		templateClone.querySelector('.product-link').href = p.permalink;
		templateClone.querySelector('.product-thumb').src = p.thumb;

		container.appendChild(templateClone);

		p.elem = templateClone;
	});

	// showBlocks();

	// Change which product items are visible based on the selected category
	$('.category-name-tab').click(function () {
		$('.category-name-tab').removeClass('active');
		$('.js-block').removeClass('active');
		$('.js-block').hide();

		$(this).addClass('active');
		if ($(this).hasClass('all')) {
			$('.js-block').addClass('active');
			showBlocks();
		} else {
			$(
				'.js-block[data-cat="' + $('.category-name-tab.active').text() + '"]'
			).addClass('active');
			showBlocks();
		}
	});

	// // 'Load More' functionality
	// $('#btn-load').on('click', function () {
	// 	$('.js-block.active:hidden').slice(0, 8).show();

	// 	hideBtn();

	// 	// Show back to top button once 'Load More' button has been clicked
	// 	$('.btn-btt').show();
	// });
});

function hideBtn() {
	if ($('.js-block.active:hidden').length == 0) {
		$('#btn-load').hide();
	} else {
		$('#btn-load').show();
	}
}

// Universal function for showing 8 product items at a time
function showBlocks() {
	$('.js-block.active').slice(0, 8).show();

	// Hide the 'Load More' button if there are no more products left to load
	if ($('.js-block.active:hidden').length == 0) {
		$('#btn-load').hide();
	} else {
		$('#btn-load').show();
	}
}
