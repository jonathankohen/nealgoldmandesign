$(function () {
	console.log("kill me");

	function checkWidth() {
		if ($(window).width() <= 992) {
			$("#hero__img")
				.insertAfter("#hero__blurb")
				.css("display", "flex")
				.css("flex-direction", "column")
				.css("align-items", "center")
				.css("margin-top", "2em");
		} else {
			$("#hero__img").insertAfter("#hero__text");
		}

		// if ($(window).width() <= 1360) {
		// 	$("#experiences").css("color", "#e5e2d7");
		// } else {
		// 	$("#experiences").css("color", "#bc6c25");
		// }
	}

	checkWidth();

	$(window).on("resize", function () {
		checkWidth();
	});
});
