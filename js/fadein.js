$(function()　{
	var block = $(".block"),
		Window = $(window);

	block.css('opacity', '0');
	Window.scroll(function() {
		block.each(function() {
			if (Window.scrollTop() > $(this).offset().top - Window.height()) {
				$(this).animate({opacity: "1"}, 500);
			}
		});
	});
});