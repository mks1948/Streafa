$(document).ready(function(){

	// Top slider
	$('#top-slider').carousel({
		interval: 4000
	});
	// Promo slider
	$('#promo-slider').carousel({
		interval: 3000
	});
	mobileMenu();
	//ODLICZENIA
	$('.timer').countTo();

});

//Scrol dla naglowka

$(window).bind('scroll',function(event){
	if($(window).scrollTop()>20 ){
		$('.main-header').addClass('header-short');
		$('.main-logo img').css('max-height',28);
		
		  
	
	}
	else{
		$('.main-header').removeClass('header-short');
		$('.main-logo img').css('max-height',42);
	}
});


function myFunction(x) {
    x.classList.toggle("change");
  
	$("#mobile-menu").toggleClass("menu-hidden", 800, "easeOutQuint");
	 
	var element = document.getElementsByClassName('nav-right');

	element.removeClass;

  };