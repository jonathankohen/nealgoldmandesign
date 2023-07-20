$(function () {
	// $(".navbar__toggle").on("click", function () {
	// $(".navbar__menu").toggleClass("navbar__menu--open");
	// $(".navbar__toggle").toggleClass("navbar__toggle--open");
	// $(".navbar__menu").slideToggle();
	// $(".navbar__links-container").toggleClass("navbar__links-container--open");
	// });

	function checkWidth() {
		if ($(window).width() <= 992) {
			$(".hero__img")
				.insertAfter("#hero__blurb")
				.css("display", "flex")
				.css("flex-direction", "column")
				.css("align-items", "center")
				.css("margin-top", "2em");
		} else {
			$(".hero__img").insertAfter("#hero__text");
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

	// $(".carousel").slick({
	// 	// infinite: true,
	// 	slidesToShow: 3,
	// 	slidesToScroll: 2,
	// });

	$(".carousel").slick({
		slidesToShow: 5,
		slidesToScroll: 2,
		infinite: false,

		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: true,
				},
			},
			{
				breakpoint: 300,
				slidesToScroll: 2,
				settings: "unslick", // destroys slick
			},
		],
	});
});
