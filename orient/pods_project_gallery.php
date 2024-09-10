[pods name="project" where="ID = '{@ID}'"]
<a href="{@post_thumbnail_url.large}" data-fancybox-trigger="gallery">
	{@post_thumbnail.large}
</a>
[each additional_images]
<a href="{@additional_images._src.large}" data-fancybox="gallery">
	{@additional_images._img.thumbnail}
</a>
[/each]
[/pods]

<script>
	Fancybox.bind('[data-fancybox="gallery"]', {});
</script>