$(document).ready(function () {
	$('input[name="filter-service"]').on('change', function () {
		let selectedServices = []
		$('input[name="filter-service"]:checked').each(function () {
			selectedServices.push($(this).attr('id').replace('service-', ''))
		})

		$('.project-card').each(function () {
			var cardService = $(this)
				.find('.project-card-thumb')
				.data('service')
				.toString()

			if (
				selectedServices.length === 0 ||
				selectedServices.includes(cardService)
			) {
				$(this).show()
			} else {
				$(this).hide()
			}
		})
	})
})
