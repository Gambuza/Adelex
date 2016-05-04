// Карусель
$(document).ready(function() {

	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		responsiveClass:true,
		responsive: {
			0: {
				items: 1
			}
		}
	})

	$('.owl-carousel-modal').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
   	nav:false,
   	dots: false,
    responsive:{
        0:{
            items:1,
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
		$(this).parent().parent().find('.info').css('z-index', 1);

		$(this).parent().find('.visible-trigger').toggleClass("show");


	  	// $( ".visible-trigger" ).show( "fast", function() {
	   //  	// Animation complete.
	  	// });

	    if ($(this).text() == "Подробнее")
	       $(this).text("Скрыть")
	    else
	       $(this).text("Подробнее");
	});

	// Модальное окно
		$('a.go').click( function(event){ 
			event.preventDefault(); 
			$('#modal_form').addClass("open");
			$('body').addClass("overflow");
		});
	// Закрытьß
	$('#modal_close, #overlay').click( function(){ 
		$('#modal_form').removeClass("open");
		$('body').removeClass("overflow");
	});

});


