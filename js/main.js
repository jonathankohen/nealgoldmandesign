$(function () {
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
	}

	const canSvg = !!(
		document.createElementNS &&
		document.createElementNS("http://www.w3.org/2000/svg", "svg")
			.createSVGRect
	);

	if (!canSvg) {
		var e = document.getElementsByTagName("img");
		if (!e.length) {
			e = document.getElementsByTagName("IMG");
		}
		for (var i = 0, n = e.length; i < n; i++) {
			var img = e[i],
				src = img.getAttribute("src");
			if (src.match(/svgz?$/)) {
				/* URL ends in svg or svgz */
				img.setAttribute("src", img.getAttribute("data-fallback"));
			}
		}
	}

	checkWidth();

	$(window).on("resize", function () {
		checkWidth();
	});
});
