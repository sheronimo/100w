<div class="projects-wrapper">
	<div class="projects-sidebar">
		<p class="services-head">
			Services
		</p>
		<ul class="services-list">
			[pods name="service" limit="999"]
			<li class="services-list-item">
				<input type="checkbox" name="filter-service" id="service-{@term_id}">
				<label for="service-{@term_id}">{@name}</label>
			</li>
			[/pods]
		</ul>
	</div>
	<div class="projects-grid">
		[pods name="project" limit="999"]
		<a class="project-card" href="{@permalink,esc_url}">
			<img src="{@post_thumbnail_url.medium_large}" class="project-card-thumb" data-service="{@service.term_id}">
			<div class="project-card-content">
				<div class="project-card-title-wrapper">
					<h5 class="project-card-title">{@post_title}</h5>
				</div>
				[if service.name]
				<p class="project-card-cat">{@service.name}</p>
				[/if]
				[if post_excerpt]
				<div class="project-card-excerpt">{@post_excerpt}</div>
				[/if]
			</div>
		</a>
		[/pods]
	</div>
</div>