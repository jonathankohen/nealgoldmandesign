$(function () {
	$(window).on("resize", function () {
		const win = $(this);
		if (win.width() <= 992) {
			$("#hero__img")
				.insertAfter("#hero__blurb")
				.css("display", "flex")
				.css("flex-direction", "column")
				.css("align-items", "center")
				.css("margin-top", "2em");
		}

		if (win.width() > 992) {
			$("#hero__img").insertAfter("#hero__text");
		}
	});
});
