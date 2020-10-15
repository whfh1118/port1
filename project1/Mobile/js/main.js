$(function(){
	$("#header .top .menu a").click(function(e){
		e.preventDefault();
		$(".tab_menu").addClass("active");
	});

	$("#tab_gnb > ul > li").click(function(e){
		e.preventDefault();
		$("#tab_gnb > ul > li").find(".after").css({"display":"block"});
		$(this).find(".after").css({"display":"none"});

		if($(this).hasClass("active") == false){
			$("#tab_gnb > ul > li").removeClass("active");
			$(this).addClass("active");
			$("#tab_gnb ul ul").slideUp(300);
			$(this).find("ul").slideDown(300);
		}
		else {
			$(this).removeClass("active");
			$(this).find("ul").slideUp(300);
			$("#tab_gnb > ul > li").find(".after").css({"display":"block"});
		}
	});

	$(".tab_menu .tab a").click(function(e){
		e.preventDefault();
		$("#tab_gnb > ul > li").removeClass("active");
		$(".tab_menu").removeClass("active");
		$("#tab_gnb ul ul").slideUp(300);
		$("#tab_gnb > ul > li").find(".after").css({"display":"block"});
	});

	$(window).trigger("resize");

	var swiper1 = new Swiper('#header .swiper-container', {
		navigation: {
			nextEl: '#header .swiper-button-next',
			prevEl: '#header .swiper-button-prev',
		},
		pagination: {
        el: '#header .swiper-pagination',
      },
			on: {
			init: function(){
				descriptionFunction();
			},
			transitionEnd: function(){
				descriptionFunction()
			}
		}	
	});

	function descriptionFunction(){
		$("#header .swiper-slide").each(function(){
			if($(this).hasClass("swiper-slide-active")){
				$(this).find(".description").fadeIn(300);
			}
			else{
				$(this).find(".description").fadeOut(300);
			}
		});
	}

	var video=document.getElementById("main_video");
	var w, h;
	var videoW, videoH;

	video.muted=true;
	video.play();

	$(window).resize(function(){
		$("#main_video").removeAttr("style");
		w=$(window).width();
		h=$(window).height();

		if(w > h){
			videoW=w;
			$("#main_video").css({width:videoW});
			videoH=$("#main_video").height();

			if(videoH < h){
				videoW=w;
				videoH=h;
				$("#main_video").css({height:h});
			}
		}
		else{
			videoH=h;
			$("#main_video").css({width:videoH});
		}
	});

	video.addEventListener("loadeddata", function(){
		videoW=$("#main_video").width();
		videoH=$("#main_video").height();
		$(window).trigger("resize");
	});
	video.addEventListener("ended", function(){
		video.currentTime=0;
		video.play();
	});

	var t=0;
	var scrollTimer=0;

	$(window).scroll(function(){
		clearTimeout(scrollTimer);

		scrollTimer=setTimeout(function(){
			t=$(window).scrollTop();

			if(t > $(window).height()){
				if($("#header .top").hasClass("fixed") == false){
					$("#header .top").addClass("fixed").animate({top:0, opacity:1}, 300);
				}
				else{
					return;
				}
			}
			else{
				if($("#header .top").hasClass("fixed") == true){
					$("#header .top").removeAttr("style");
					$("#header .top").removeClass("fixed");
				}
				else{
					return;
				}
			}
		});
	});

	var swiper = new Swiper('#sec1 .swiper-container', {
		effect: 'flip',
		grabCursor: true,
		pagination: {
			el: '#sec1 .swiper-pagination',
		},
	});

	$("#sec1 .swiper-slide").click(function(){
		$("#sec1 .swiper-slide .icon_bf").toggleClass("active");
		$("#sec1 .swiper-slide .cover").toggleClass("active");
		$("#sec1 .swiper-slide .cover .icon").toggleClass("active");
	});

	var swiper = new Swiper('#sec2 .swiper-container', {
		effect: 'coverflow',
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: 'auto',
		coverflowEffect: {
			rotate: 30,
			stretch: 0,
			depth: 150,
			modifier: 1,
			slideShadows: true,
		},
		pagination: {
			el: '#sec2 .swiper-pagination',
		},
	});
});