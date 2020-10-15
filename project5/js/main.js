$(function(){
	var t=0;
	var w=0;
	var video=document.getElementById("h_video");

	$("#header .tab a").click(function(e){
		e.preventDefault();
		$("#tab_fixed .menu").addClass("active");
		$(".dim").addClass("active");
	});
	$("#tab_fixed .menu .icon a").click(function(e){
		e.preventDefault();
		$("#tab_fixed .menu").removeClass("active");
		$(".dim").removeClass("active");
	});
	

	$(window).scroll(function(){
		t=$(window).scrollTop();
		// console.log(t);
		if(t >= 70){
			$("#header .top .fixed_menu").addClass("visible");
			$("#header .top").addClass("active");
		}
		else{
			$("#header .top .fixed_menu").removeClass("visible");
			$("#header .top").removeClass("active");
		}
	});

	$(window).scroll(function(){
		if(t <= $("#header .description .button").offset().top){
		}
		else if(t <= $("#sec1 .list li:last-child").offset().top){
			$("#sec1 .list li").addClass("active");
		}
		else if(t <= $("#sec2 .list li:last-child").offset().top){
			$("#sec2 .list li").addClass("active");
		}
		else if(t <= $("#sec3 .list li:last-child").offset().top){
			$("#sec3 .list li").addClass("active");
		}
		else{
			$("#sec4 .list li").addClass("active");
		}
	});
	
	$(window).resize(function(){
		w=$(window).width();

		if(w > 740){
			if($("#tab_fixed .menu").hasClass("active") == true)
				$("#tab_fixed .menu").removeClass("active")
				$(".dim").removeClass("active");
		}
	});
	
	$("#header nav li, #tab_fixed nav li").click(function(e){
		e.preventDefault();

		$(".dim").removeClass("active");
		$("#tab_fixed .menu").removeClass("active");

		categoryN=$(this).index();
		if(categoryN == 0){
			$("html").animate({scrollTop : $("#header").offset().top}, 800);
			$("#footer .mov_top").removeClass("active");
		}
		else if(categoryN == 1){
			$("html").animate({scrollTop : $("#sec1").offset().top}, 800);
			$("#footer .mov_top").addClass("active");
		}
		else if(categoryN == 2){
			$("#sec2 .list li").addClass("active");
			$("html").animate({scrollTop : $("#sec2").offset().top}, 800);
			$("#footer .mov_top").addClass("active");
		}
		else if(categoryN == 3){
			$("#sec3 .list li").addClass("active");
			$("html").animate({scrollTop : $("#sec3").offset().top}, 800);
			$("#footer .mov_top").addClass("active");
		}
		else if(categoryN == 4){
			$("#sec4 .list li").addClass("active");
			$("html").animate({scrollTop : $("#sec4").offset().top}, 800);
			$("#footer .mov_top").addClass("active");
		}
		else if(categoryN == 5){
			$("html").animate({scrollTop : $("#footer").offset().top}, 800)
			;
			$("#footer .mov_top").addClass("active");
		}
	});
	var videoList=["product1.mp4","product2.mp4","product3.mp4"];
	var videoN=0;

	video.addEventListener("loadeddata", function(){
		video.muted=true;
		video.play();
	});
	video.addEventListener("ended", function(){
		if(videoN < 2){
			videoN+=1;
		}
		else{
			videoN=0;
		}
		$("#h_video").attr("src","images/"+videoList[videoN]);
	});
});
