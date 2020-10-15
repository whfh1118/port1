$(function(){
	var swiper1 = new Swiper('#header .swiper-container', {
		navigation: {
			nextEl: '#header .swiper-button-next',
			prevEl: '#header .swiper-button-prev',
		},
		pagination: {
			el: '#header .swiper-pagination'
		},

		mousewheel: true,
		keyboard: true,

		on: {
			init: function(){
				$("#header .swiper-button-prev").hide();
				$("#header .swiper-button-next").hide();
			},
			transitionEnd: function(){
				$("#header .swiper-slide").each(function(i){
					if($(this).hasClass("swiper-slide-active")){
						if(i == 0){
							$("#header .swiper-button-prev").hide();
							$("#header .swiper-button-next").hide();
							video.play();
						}
						else{
							$("#header .swiper-button-prev").show();
							$("#header .swiper-button-next").show();	
							video.pause();
						}
					}
				});
			}
		}
	});
	$("#header .scroll_down span").addClass("active");

	var swiper2 = new Swiper('#sec1 .swiper-container', {
		effect: 'coverflow',
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: 'auto',
		coverflowEffect: {
			rotate: 40,
			stretch: 0,
			depth: 500,
			modifier: 1,
			slideShadows: true,
		},
		pagination: {
			el: '#sec1 .swiper-pagination',
		},
	});


	$("#header .top .button").click(function(e){
		e.preventDefault();
		$("header .tab_menu").addClass("active");
	});
	$("#header .tab_menu .close").click(function(e){
		e.preventDefault();
		$("header .tab_menu").removeClass("active");
		$("#tab_gnb ul ul").slideUp(300);
		$("#menu > ul > li").each(function(){
			if($(this).hasClass("active") == true){
				$(this).removeClass("active");
				$(this).find("ul").slideUp(300);
			}
		});
	});

	$("#tab_gnb > ul > li").click(function(e){
		e.preventDefault();
		$("#tab_gnb > ul > li").find(".after").css({"display":"block"});
		$(this).find(".after").css({"display":"none"});
		$("#tab_gnb > ul > li").children().css({"color":"#fff"});
		$(this).children().css({"color":"#cecece"});

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
			$("#tab_gnb > ul > li").children().css({"color":"#fff"});
		}
	});


	var winW;
	var winH;
	var videoW=$("#main_video").width();
	var videoH=$("#main_video").height();
	var video=document.getElementById("main_video");
	var videoBg=document.getElementById("sec1_bg");

	videoBg.addEventListener("loadeddata", function(){

		videoBg.muted=true;
		videoBg.play();
	});

	videoBg.addEventListener("ended", function(){

		videoBg.currentTime=0;
		videoBg.play();
	});

	video.addEventListener("loadeddata", function(){
		videoW=$("#main_video").width();
		videoH=$("#main_video").height();

		video.muted=true;
		video.play();
	});

	video.addEventListener("ended", function(){
		video.currentTime=0;
		video.play();
	});

	$(window).resize(function(){
		$("#main_video").removeAttr("style");
		winW=$(window).width();
		winH=$(window).height();

		if(winW > winH){
			$("#main_video").css({width:winW});
			videoH=$("#main_video").height();

			if(videoH < winH){
				videoH=winH;
				$("#main_video").css({width:"auto",height:winH});
			}
		}
		else{
			$("#main_video").css({width:winH});
		}
	});
	$(window).trigger("resize");


	$("#header .top .search").click(function(e){
		e.preventDefault();
		$("header .login_menu").addClass("active");
	});
	$("#header .login_menu .close").click(function(e){
		e.preventDefault();
		$("header .login_menu").removeClass("active");
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
					$("#header .top .logo").css({"display":"block"});
					video.pause();
				}
				else{
					return;
				}
			}
			else{
				if($("#header .top").hasClass("fixed") == true){
					$("#header .top").removeAttr("style");
					$("#header .top").removeClass("fixed");
					$("#header .top .logo").css({"display":"none"});
					video.play();
				}
				else{
					return;
				}
			}
		});
	});

	$("#header .logo").click(function(e){
		e.preventDefault();
		$("html").animate({scrollTop:0}, 500);
	});

	$("#sec3 .item .img").click(function(e){
		e.preventDefault();
		$("#sec3 .img_pop").addClass("active");
	});
	$("#sec3 .img_pop .close").click(function(e){
		e.preventDefault();
		$("#sec3 .img_pop").removeClass("active");
	});
	$("#sec3 .img_pop .search").click(function(e){
		e.preventDefault();
		$("#sec3 .img_pop").removeClass("active");
		$("header .login_menu").addClass("active");
	});
});