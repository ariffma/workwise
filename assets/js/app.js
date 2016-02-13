$( document ).ready(function() { 
	
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
		pagination: '.swiper-pagination',

		onSlideNextEnd: function(){
			galleryContent.slideNext(true, 400);
		},

		onSlidePrevEnd: function(){
			galleryContent.slidePrev(true, 400);
		},
	});

	var galleryThumbs = new Swiper('.gallery-thumbs', {
		centeredSlides: true,
		slidesPerView: 'auto',
		slideToClickedSlide: true,

		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
	});

	galleryBig.params.control = galleryThumbs;
	galleryThumbs.params.control = galleryBig;


	$(".learnmore").click(function() {
		$(".page-description-content").slideToggle();
	});


	var descContentArt = new Swiper('.page-description-content-articles', {
		initialSlide: 10,
		slidesPerView: 'auto',
		observer: true,
		observeParents: true,
		slideToClickedSlide: true,

		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		pagination: '.swiper-pagination',
	});
	
});