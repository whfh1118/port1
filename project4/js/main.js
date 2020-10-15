$(function(){
	var n=0;
	
	$("#header nav > ul > li").hover(
		function(){
			$(this).find("a").next(".sub").css({height:380});
		},
		function(){
			$(this).find("a").next(".sub").css({height:0});
		}
	);
	$("#header nav > ul > li > a").focusin(function(){
		$(this).next(".sub").addClass("active");
		$(this).next(".sub").css({height:380});
	});
	$("#header nav li li:last-child").focusout(function(){
		$(this).parents(".sub").removeClass("active");
		$(this).parents(".sub").css({height:0});
	});

	$("#header .keyvisual li:nth-child(1) img").addClass("active");
	
	$("#header .key_inner li").click(function(e){
		e.preventDefault();
		n=$(this).index();
		$("#header .keyvisual li:nth-child(1) img").removeClass("active");
		if(n == 0){
			$("#header .keyvisual img").removeClass("active");
			$("#header .keyvisual li:nth-child(1) img").addClass("active");
		}
		else if(n == 1){
			$("#header .keyvisual img").removeClass("active");
			$("#header .keyvisual li:nth-child(2) img").addClass("active");
		}
		else if(n == 2){
			$("#header .keyvisual img").removeClass("active");
			$("#header .keyvisual li:nth-child(3) img").addClass("active");
		}
		else{
			$("#header .keyvisual img").removeClass("active");
			$("#header .keyvisual li:nth-child(4) img").addClass("active");
		}
	});

	setInterval(function(){
		if(n < 3){
			n++;
		}
		else{
			n=0;
		}

		$("#header .keyvisual li img").removeClass("active");
		$("#header .keyvisual li img").eq(n).addClass("active");
	}, 5000);

	var video=document.getElementById("v_mary");

	$("#sec2 .control").click(function(e){
		e.preventDefault();
		video.play();
		$(this).fadeOut(300);
		$("#sec2 .pause").fadeIn(600);
	});
	$("#sec2 .pause").click(function(e){
		e.preventDefault();
		video.pause();
		$("#sec2 .control").fadeIn(600);
		$(this).fadeOut(300);	
	});
	video.addEventListener("ended", function(){
		video.pause();
		$("#sec2 .control").fadeIn(600);
		$("#sec2 .pause").fadeOut(100);
		video.currentTime=0;
	});
});