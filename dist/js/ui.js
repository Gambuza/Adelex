$(document).ready(function(){$(".owl-carousel").owlCarousel({loop:!0,margin:10,nav:!0,responsive:{0:{items:1},600:{items:1},1e3:{items:1}}}),$("a.scrolls").click(function(){var t=$(this).attr("href"),o=$(t).offset().top;return jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop:o},800),!1}),$(".btn-primary").click(function(){$(this).parent().parent().find(".info").toggleClass("show"),$(this).parent().parent().find(".info").css("z-index",1),$(this).parent().find(".visible-trigger").toggleClass("show"),"Подробнее"==$(this).text()?$(this).text("Скрыть"):$(this).text("Подробнее")}),$("a#go").click(function(t){t.preventDefault(),$("#overlay").fadeIn(400,function(){$("#modal_form").css("display","block").animate({opacity:1,left:"0",top:"0",right:"0",bottom:"0"},200),$("body").css("overflow","hidden")})}),$("#modal_close, #overlay").click(function(){$("#modal_form").animate({opacity:0,top:"45%"},200,function(){$(this).css("display","none"),$("#overlay").fadeOut(400)})})});
