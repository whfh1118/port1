$(function(){
	$(".fixed li").last().click(function(e){
		e.preventDefault();
		$(".fixed").css({"display":"none"});
	});
});