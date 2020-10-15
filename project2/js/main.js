$(function(){
	var n=0;
	var t=0;
	var w;
	var distance=0;
	var timer;
	var $slider_img=$("#header .slider img");
	var selectStr="";
	var selectN=0;

	$(window).resize(function(){
		clearTimeout(timer);

		timer=setTimeout(function(){
			w=$(window).width();

			if(w > 1260){
				$slider_img.css({width:w});
			}
		}, 1);
	});
	$(window).trigger("resize");


	$("#header .slider li").eq(n).addClass("visible");
	$("#header .pagination li").eq(n).addClass("active");
	$("#header .description").eq(n).addClass("visible");

	$("#header nav > ul > li").mouseenter(function(){
		$("#header nav > ul > li").parents(".menu").addClass("active");
		$("#header .menu_shadow").addClass("active");
	});
	$("#header nav > ul > li").mouseleave(function(){
		$("#header nav > ul > li").parents(".menu").removeClass("active");
		$("#header .menu_shadow").removeClass("active");
	});

	$("#header nav > ul > li").focusin(function(){
		$("#header nav > ul > li").parents(".menu").addClass("active");
		$("#header .menu_shadow").addClass("active");
	});
	$("#header nav > ul > li").focusout(function(){
		$("#header nav > ul > li").parents(".menu").removeClass("active");
		$("#header .menu_shadow").removeClass("active");
	});

	$(".pagination li").click(function(e){
		e.preventDefault();
		
		n=$(this).index();

		$(".pagination li").removeClass("active");
		$(".pagination li").eq(n).addClass("active");
		$("#header .main_slider li").removeClass("visible");
		$("#header .main_slider li").eq(n).addClass("visible");
		$("#header .description").removeClass("visible");
		$("#header .description").eq(n).addClass("visible");
	});
	setInterval(function(){
		distance-=200;
		// console.log(distance);
		$("#header .loop_gallery ul").animate({left:distance}, 1500, function(){
			$(this).append($("#header .loop_gallery li:first-child"));
			distance+=200;
			$(this).css({left:distance});
		});
	}, 2000);
	
	setInterval(function(){
		if(n < 4){
			n++;
		}
		else{
			n=0;
		}
		$(".pagination li").removeClass("active");
		$(".pagination li").eq(n).addClass("active");
		$("#header .main_slider li").removeClass("visible");
		$("#header .main_slider li").eq(n).addClass("visible");
		$("#header .description").removeClass("visible");
		$("#header .description").eq(n).addClass("visible");
	}, 5000);

	$(window).scroll(function(){
		t=$(window).scrollTop();
		// console.log(t);

		if(t <= $("#sec1").offset().top){
			$("#sec1 .contents li").addClass("active");
			$("#sec1 .effect").addClass("active");
			$("#content .ball1").addClass("active");
			$("#content .ball2").addClass("active");
			$("#content .ball3").addClass("active");
		}
		else if(t <= $("#sec2").offset().top){
			$("#sec2 .center_banner li").addClass("active");
		}
		else if(t <= $("#sec3").offset().top){
			$("#sec3 .effect").addClass("active");
		}
		else if(t <= $("#sec4").offset().top){
			$("#sec4 li").addClass("active");
		}
		else if(t <= $("#sec5").offset().top){
			$("#content .ball1").removeClass("active");
			$("#content .ball2").removeClass("active");
			$("#content .ball3").removeClass("active");
		}
	});

	$("#footer a[class^=check_box]").click(function(e){
		e.preventDefault();

		if($(this).hasClass("checked") == true){
			$(this).removeClass("checked");
			$(this).next().prop("checked",false);
		}
		else{
			$(this).addClass("checked");
			$(this).next().prop("checked",true);
		}
	});
	$("#footer .select dt a").click(function(e){
		e.preventDefault();
		$(this).toggleClass("active");
		$("#footer .select dd").slideToggle("300");
	});
	
	$("#footer .select dd a").click(function(e){
		e.preventDefault();
		$("#footer .select dd").slideUp(300);
		$("#footer .select dt a").removeClass("active");
		selectStr=$(this).html() + "<span></span>";
		$("#footer .select dt a").html(selectStr);

		selectN=$(this).parent().index();
		$("#footer .select select option").eq(selectN).prop("selected", true);
	});
});