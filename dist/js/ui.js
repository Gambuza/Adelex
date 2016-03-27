// Слайдер
$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		  loop:true,
		  margin:10,
		 nav:true,
		autoplay:true,
		autoplayTimeout:5000,
		responsive:{0:{items:1},600:{items:1},1e3:{items:1}}
	})
});
// маркер на карте


        // Плавность скролла
	$("a.scrolls").click(function(){
		var t=$(this).attr("href"),
		n=$(t).offset().top;
		return jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop:n},1000),!1});
	// Анимация блока показать/скрыть
	$(".btn-primary").click(function(){
		$(this).parent().parent().find(".info").toggleClass("show"),"Подробнее"==$(this).text()?$(this).text("Скрыть"):$(this).text("Подробнее")
});
	// Модальное окно
$(document).ready(function() {
	$('a#go').click( function(event){ 
		event.preventDefault(); 
		$('#overlay').fadeIn(400, 
		 	function(){
				$('#modal_form') 
					.css('display', 'block') 
					.animate({opacity: 1, top: '50%'}, 200); 
		});
	});
	// Закрыть
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