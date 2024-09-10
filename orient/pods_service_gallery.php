[pods name="service" where="slug = '{@slug}'"]
<a href="{@featured_image._src.large.large}" data-fancybox="gallery">
	{@featured_image._img.large}
</a>
[each images]
<a href="{@images._src.large}" data-fancybox="gallery">
	{@images._img.thumbnail}
</a>
[/each]
[/pods]

<script>
	Fancybox.bind('[data-fancybox="gallery"]', {});
</script>