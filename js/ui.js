// Карусель
$(document).ready(function() {

	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	})


	$("a.scrolls").click(function() {
		var elementClick = $(this).attr("href")
		var destination = $(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({
			scrollTop: destination
		}, 800);
		return false;
	});

	// Преимущества

	$(".btn-primary").click(function() {
		$(this).parent().parent().find('.info').toggleClass("show");

    if ($(this).text() == "Подробнее")
       $(this).text("Скрыть")
    else
       $(this).text("Подробнее");
	});

});