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
		$('a#go').click( function(event){ 
		event.preventDefault(); 
		$('#overlay').fadeIn(400, 
		 	function(){
				$('#modal_form') 
					.css('display', 'block') 
					.animate({opacity: 1, left: '0', top: '0', right: '0', bottom: '0'}, 200); 
				$('body').css('overflow', 'hidden');
		});
	});
	// Закрытьß
	$('#modal_close, #overlay').click( function(){ 
		$('#modal_form')
			.animate({opacity: 0, top: '45%'}, 200,
				function(){ 
					$(this).css('display', 'none'); 
					$('#overlay').fadeOut(400);
				}
			);
	});

});

