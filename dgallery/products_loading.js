$(document).ready(function () {
	$('.category-name-tab').first().addClass('active');

	showBlocks();

	// Change which product items are visible based on the selected category
	$('.category-name-tab').click(function () {
		$('.category-name-tab').removeClass('active');
		$('.product-block').hide();
		$(this).addClass('active');
		showBlocks();
	});

	// 'Load More' functionality
	$('#btn-load').on('click', function () {
		$(
			'.product-block[data-cat="' +
				$('.category-name-tab.active').text() +
				'"]:hidden'
		)
			.slice(0, 8)
			.show();

		// Show back to top button once 'Load More' button has been clicked
		$('.btn-btt').show();

		if (
			$(
				'.product-block[data-cat="' +
					$('.category-name-tab.active').text() +
					'"]:hidden'
			).length == 0
		) {
			$('#btn-load').hide();
		}
	});
});

// Universal function for showing 8 product items at a time
function showBlocks() {
	$('.product-block[data-cat="' + $('.category-name-tab.active').text() + '"]')
		.slice(0, 8)
		.show();

	// Hide the 'Load More' button if there are no more products left to load
	if (
		$(
			'.product-block[data-cat="' +
				$('.category-name-tab.active').text() +
				'"]:hidden'
		).length == 0
	) {
		$('#btn-load').hide();
	} else {
		$('#btn-load').show();
	}
}
