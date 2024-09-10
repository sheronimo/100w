document.addEventListener('DOMContentLoaded', function () {
	let timelineItems = document.querySelectorAll('.ds-timeline .timeline-item')

	let observerOptions = {
		root: null,
		rootMargin: '0px 0px -20% 0px',
		threshold: 1
	}

	let observer = new IntersectionObserver(function (entries, observer) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('active')
			}
		})
	}, observerOptions)

	timelineItems.forEach((item) => {
		observer.observe(item)
	})
})
