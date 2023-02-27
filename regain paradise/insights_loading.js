$(document).ready(function () {
	showBlock();
	showCard('.active-view .js-card');

	$('.resource-name-tab').click(function () {
		$('.resource-name-tab').removeClass('active');
		$('.insights-view').removeClass('active-view');
		$(this).addClass('active');
		showBlock();
		showCard('.active-view .js-card');
	});

	$('.dropdown .dropdown-toggle').click(function () {
		$(this).parent().toggleClass('open');
	});

	$('.cat-tab').click(function () {
		$(this).closest('.dropdown .dropdown-toggle').removeClass('open');
		$('.active-view .cat-tab').removeClass('active');
		$('.active-view .js-card').addClass('hidden');
		$(this).addClass('active');
		if ($(this).hasClass('all')) {
			showCard('.active-view .js-card');
		} else {
			showCard('.active-view .js-card[data-cat="' + $(this).text() + '"]');
		}
	});

	$('#btn-load').on('click', function () {
		let withCatHidden =
			'.active-view .js-card[data-cat="' +
			$('.active-view .cat-tab.active').text() +
			'"].hidden';
		let withoutCatHidden = '.active-view .js-card.hidden';

		if ($('.active-view').hasClass('video-view')) {
			$(withoutCatHidden).slice(0, 12).removeClass('hidden');

			hideBtn($(withoutCatHidden));
		} else {
			if (!$('.active-view .cat-tab.active').hasClass('all')) {
				$(withCatHidden).slice(0, 12).removeClass('hidden');

				hideBtn($(withCatHidden));
			} else {
				$(withoutCatHidden).slice(0, 12).removeClass('hidden');

				hideBtn($(withoutCatHidden));
			}
		}
	});
});

function hideBtn(elem) {
	if (elem.length == 0) {
		$('#btn-load').hide();
	} else {
		$('#btn-load').show();
	}
}

function showBlock() {
	// Get active top tab
	let activeTab = document.querySelector('.resource-name-tab.active');
	// Get corresponding data-variable of active top tab
	let getView = activeTab.dataset.view;
	// Activate the view that matches the active tab's data variable
	let activeViewStr = `.insights-view.${getView}`;
	$(activeViewStr).addClass('active-view');

	$('.active-view .js-card').addClass('hidden');
}

function showCard(elem) {
	$(elem).slice(0, 12).removeClass('hidden');

	if ($(`${elem}.hidden`).length == 0) {
		$('#btn-load').hide();
	} else {
		$('#btn-load').show();
	}
}
