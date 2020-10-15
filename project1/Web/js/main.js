window.addEventListener("load", function(){
	var header=document.getElementById("header");
	var top=header.children;
	for(var i=0; i<top.length; i++){
		if(top[i].className == "top"){
			var headTop=top[i];
		}
		else if(top[i].className == "menu_shadow"){
			var headMenuShadow=top[i];
		}
		else if(top[i].className == "slider"){
			var headSlider=top[i];
		}
	}

	// gnb
	var nav=document.getElementById("gnb");
	var navUl=nav.children[0];
	var navLi=navUl.children;
	for(i=0; i<navLi.length; i++){
		navLi[i].index=i; // 수정

		navLi[i].addEventListener("mouseenter", function(e){
			headTop.classList.add("active");
			headMenuShadow.classList.add("active");
			// e.target.children[0].classList.add("active");
			// for(var j=0; j<navLi.length; j++){ // 수정 : CSS로 해결하는 것이 좋을 거 같아요.
				// navLi[j].children[0].classList.add("active");
			// }
		});
		navLi[i].addEventListener("mouseleave", function(){
			headTop.classList.remove("active");
			headMenuShadow.classList.remove("active");
			// for(j=0; j<navLi.length; j++){ // 수정
				// navLi[j].children[0].classList.remove("active");
			// }
		});
		navLi[i].children[0].addEventListener("focusin", function(e){ // 수정
			var menuN=e.target.parentElement.index;
			// console.log("menuN : "+menuN);
			e.target.parentElement.classList.add("active");

			if(menuN == 0){
				headTop.classList.add("active");
				headMenuShadow.classList.add("active");
			}
		});

		var navLi2=navLi[i].children[1].children;
		// console.log(navLi2);

		for(var j=0; j<navLi2.length; j++){
			if(j == (navLi2.length-1)){
				navLi2[j].children[0].addEventListener("focusout", function(e){
					// console.log("focusout event!!");
					var link=e.target.parentElement.parentElement.parentElement;
					// console.log(link);
					link.classList.remove("active");

					var index=link.index;
					// console.log("index : "+index);

					if(index == (navLi.length-1)){
						headTop.classList.remove("active");
						headMenuShadow.classList.remove("active");
					}
				});
			}
		}
	}

	// slider
	var headSliderUl=headSlider.children[0];
	var headSliderLi=headSliderUl.children;
	var n=0;
	headSliderLi[0].classList.add("active");
	headSliderLi[0].children[0].classList.add("active");
	setInterval(function(){
		if(n < headSliderLi.length-1){
			n+=1;
		}
		else {
			n=0;
		}
		for(i=0; i<headSliderLi.length; i++){
			if(n == i){
				headSliderLi[i].classList.add("active");
				headSliderLi[i].children[0].classList.add("active");
			}
			else{
				headSliderLi[i].classList.remove("active");
				headSliderLi[i].children[0].classList.remove("active");
			}
		}
	}, 6000);

	// popup
	var fixed=header.nextElementSibling.nextElementSibling.nextElementSibling;
	var fixedUl=fixed.children[0];
	var fixedLi=fixedUl.children;
	for(i=0; i<fixedLi.length; i++){
		if(i == fixedLi.length-1){
			var exitButton=fixedLi[i];
		}
	}
	exitButton.addEventListener("click",function(e){
		e.preventDefault();
		fixed.style.display="none";
	});
	for(i=0; i<headSlider.children.length; i++){
		if(headSlider.children[i].className == "pagination"){
			var headPagination=headSlider.children[i];
		}
	}

	// PageButton
	var headPageUl=headPagination.children[0];
	for(i=0; i<headPageUl.children.length; i++){
		if(headPageUl.children[i].className == "left"){
			var PageLeft=headPageUl.children[i];
		}
		else if(headPageUl.children[i].className == "right"){
			var PageRight=headPageUl.children[i];
		}
	}
	PageLeft.addEventListener("click", function(e){
		e.preventDefault();

		if(n > 0){
			n-=1;
			for(i=0; i<headSliderLi.length; i++){
				if(n == i){
					headSliderLi[i].classList.add("active");
					headSliderLi[i].children[0].classList.add("active");
				}
				else{
					headSliderLi[i].classList.remove("active");
					headSliderLi[i].children[0].classList.remove("active");
				}
			}
		}
	});
	PageRight.addEventListener("click", function(e){
		e.preventDefault();
		if(n < (headSliderLi.length-1)){
			n+=1;
			for(i=0; i<headSliderLi.length; i++){
				if(n == i){
					headSliderLi[i].classList.add("active");
					headSliderLi[i].children[0].classList.add("active");
				}
				else{
					headSliderLi[i].classList.remove("active");
					headSliderLi[i].children[0].classList.remove("active");
				}
			}
		}
	});
});