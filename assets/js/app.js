if ($("aside.article-share").length > 1) {
	$(window).scroll(function() { 
		$("aside.article-share").toggleClass("top", $(window).scrollTop() > 140); 
		var tagsPos = $(".tags").position();
		$("aside.article-share").toggleClass("left", $(window).scrollTop() > tagsPos.top); 
	});
};

$( document ).ready(function() { 

	new WOW().init();
	
	$(".nav_resp li:last-child").click(function() {
		$(".navbar-resp").toggleClass("open")
	});

	var carousel_hero_content = new Swiper (".carousel-hero-content", {
		effect: "fade",
		simulateTouch: false,
		observer: true,
		observeParents: true,
		
		pagination: '.swiper-pagination',
		paginationClickable: true,
	});

	var carousel_hero_bg = new Swiper (".carousel-hero", {
	    onSlideChangeStart: function(){ 
	    	carousel_hero_content.slideTo(carousel_hero_bg.activeIndex, 400);
	    }
	});

	var carousel_trending = new Swiper (".carousel-trending", {
	    pagination: '.swiper-pagination',
		paginationClickable: true,
	});





	var galleryContent = new Swiper('.gallery-content', {
		observer: true,
		observeParents: true,
		simulateTouch: false,   
		initialSlide: 0,
	});

	var galleryBig = new Swiper('.gallery-big', {
		observer: true,
		observeParents: true,
		initialSlide: 0,

		onSlideChangeStart: function(){
			galleryThumbs.slideTo(galleryBig.activeIndex, 400);
			galleryContent.slideTo(galleryBig.activeIndex, 400);
		},

		pagination: '.swiper-pagination',
	});

	var galleryThumbs = new Swiper('.gallery-thumbs', {
		centeredSlides: true,
		slidesPerView: 'auto',
		slideToClickedSlide: true,

		onSlideChangeStart: function(){
			galleryBig.slideTo(galleryThumbs.activeIndex, 400);
		},

		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
	});





	$(".learnmore").click(function() { 
		$(".page-description-content").toggleClass("show");
	});

	var descContentArt = new Swiper('.page-description-content-articles', {
		initialSlide: 0,
		slidesPerView: "auto",
		observer: true,
		observeParents: true,

		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		pagination: '.swiper-pagination',

		onInit: function(){
			var $specialSlider = $(".page-description-content-articles");
			if ($specialSlider.find(".swiper-slide").length == 1) {
				$specialSlider.addClass("one");
			} else if ($specialSlider.find(".swiper-slide").length == 2) {
				$specialSlider.addClass("two");
			}
		},
	});


});