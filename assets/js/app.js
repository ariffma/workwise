$( document ).ready(function() { 

	new WOW().init();
	
	$(".nav_resp li:last-child").click(function() {
		$(".navbar-resp").toggleClass("open")
	});

	var carousel_hero = new Swiper (".carousel-hero", {
	    pagination: '.swiper-pagination',
		paginationClickable: true,
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


	$(".learnmore").click(function() { $(".page-description-content").slideToggle(300); });


	var descContentArt = new Swiper('.page-description-content-articles', {
		initialSlide: 0,
		slidesPerView: 'auto',
		observer: true,
		observeParents: true,
		slideToClickedSlide: true,

		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		pagination: '.swiper-pagination',

		onInit: function(){
			if ($(".swiper-slide").length == 1) {
				$(".page-description-content-articles").addClass("one").removeClass("two");
			} else if ($(".swiper-slide").length == 2) {
				$(".page-description-content-articles").addClass("two").removeClass("one");
			} else if ($(".swiper-slide").length >= 3) {
				$(".page-description-content-articles").removeClass("one two");
			};
		}
		
	});
	
});