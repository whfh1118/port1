window.addEventListener("load", function(){
	var n=0;
	var pageNum=0;
	var targetY=0;
	var scrollTop=0;
	var wrapper=document.getElementsByClassName("wrapper")[0];
	var secCont=document.getElementById("contents");
	var tabGnb=document.getElementById("tab_gnb");
	var nextLink=document.getElementById("next_link");
	var tab=document.getElementById("tab");
	var menuBtn=tab.children[0];
	var project1=document.getElementById("project1");
	var project1Html="";
	var project2=document.getElementById("project2");
	var project2Html="";
	var project3=document.getElementById("project3");
	var project3Html="";
	var project4=document.getElementById("project4");
	var project4Html="";
	var project5=document.getElementById("project5");
	var project5Html="";

	var project1URL="/port1/data/project1.html";
	var project1Request=new XMLHttpRequest();

	project1Request.open("GET", project1URL);
	project1Request.send();

	project1Request.addEventListener("load", function(){
		var data=project1Request.response;

		project1Html=data;
		if(project1Request.readyState == 4){
			project1.innerHTML=project1Html;
		}
	});

	var project2URL="/port1/data/project2.html";
	var project2Request=new XMLHttpRequest();

	project2Request.open("GET", project2URL);
	project2Request.send();

	project2Request.addEventListener("load", function(){
		var data=project2Request.response;

		project2Html=data;
		if(project2Request.readyState == 4){
			project2.innerHTML=project2Html;
		}
	});

	var project3URL="/port1/data/project3.html";
	var project3Request=new XMLHttpRequest();

	project3Request.open("GET", project3URL);
	project3Request.send();

	project3Request.addEventListener("load", function(){
		var data=project3Request.response;

		project3Html=data;
		if(project3Request.readyState == 4){
			project3.innerHTML=project3Html;
		}
	});

	var project4URL="/port1/data/project4.html";
	var project4Request=new XMLHttpRequest();

	project4Request.open("GET", project4URL);
	project4Request.send();

	project4Request.addEventListener("load", function(){
		var data=project4Request.response;

		project4Html=data;
		if(project4Request.readyState == 4){
			project4.innerHTML=project4Html;
		}
	});

	var project5URL="/port1/data/project5.html";
	var project5Request=new XMLHttpRequest();

	project5Request.open("GET", project5URL);
	project5Request.send();

	project5Request.addEventListener("load", function(){
		var data=project5Request.response;

		project5Html=data;
		if(project5Request.readyState == 4){
			project5.innerHTML=project5Html;
		}
	});

	menuBtn.addEventListener("click", function(){
		if(menuBtn.classList.contains("open") != true){
			menuBtn.classList.add("open");
			tabGnb.classList.add("active");
		}
		else{
			menuBtn.classList.remove("open");
			tabGnb.classList.remove("active");
		}
	});

	for(var i=0; i<tabGnb.children[0].children[0].children.length; i++){
		tabGnb.children[0].children[0].children[i].index=i;
		tabGnb.children[0].children[0].children[i].addEventListener("click", function(e){
			e.preventDefault();
			tabGnb.classList.remove("active");
			menuBtn.classList.remove("open");
			clickMoving(e);
		});
	}

	var gnb=document.createElement("nav");
	gnb.setAttribute("id","gnb");
	wrapper.appendChild(gnb);

	var gnbCont=document.createElement("ul");
	gnbCont.setAttribute("class","gnbCont");
	gnb.appendChild(gnbCont);

	var projectCont=document.createElement("ul");
	projectCont.setAttribute("class","projectCont");
	
	var gnbHtml="";

	var requestURL="/port1/data/data.json";
	var request=new XMLHttpRequest();

	function init(){
		var timer=setTimeout(function(){
			request.open("GET", requestURL);
			// request.responseType="json";
			request.send();

			request.addEventListener("load", function(){
				var data=request.response;
				data=JSON.parse(data);

				for(var key in data){
					gnbHtml+='<li><a href="">'+key+'</a></li>'+'\n';
				}

				gnbCont.innerHTML=gnbHtml;
				
				for(i=0; i<gnbCont.children.length; i++){
					gnbCont.children[i].index=i;
					
					if(gnbCont.children[i].index  == 0){
						gnbCont.children[i].classList.add("active");
					}
					gnbCont.children[i].addEventListener("click", function(e){
						e.preventDefault();
						for(var j=0; j<gnbCont.children.length; j++){
							if(j == e.currentTarget.index){
								gnbCont.children[j].classList.add("active");
							}
							else{
								gnbCont.children[j].classList.remove("active");
							}
							clickMoving(e);
						}
					});
				}
			});
		}, 10);
	}
	init();

	window.addEventListener("scroll", scrollMoving);

	function scrollMoving(){
		var timer=setInterval(function(){
			clearTimeout(timer);
			scrollTop=window.pageYOffset;

			if(scrollTop < secCont.children[1].offsetTop){
				n=0;
			}
			else if(scrollTop < secCont.children[2].offsetTop){
				n=1;
			}
			else if(scrollTop < secCont.children[3].offsetTop){
				n=2;
			}
			else if(scrollTop < secCont.children[4].offsetTop){
				n=3;
			}

			for(i=0; i<gnbCont.children.length; i++){
				if(i == n){
					gnbCont.children[i].classList.add("active");
				}
				else{
					gnbCont.children[i].classList.remove("active");
				}
			}
		}, 10);
	}

	function clickMoving(evt){
		evt.preventDefault();
		window.removeEventListener("scroll", scrollMoving);
		n=evt.currentTarget.index;
		targetY=secCont.children[n].offsetTop;

		window.scrollTo({
			top: targetY,
			behavior: "smooth"
		});
		var timer=setTimeout(function(){
			clearTimeout(timer);
			window.addEventListener("scroll", scrollMoving);
		}, 5000);
	}

	project1.classList.add("active");

	var listBtn=secCont.children[3].children[0].children[0].children[2].children[0].children;

	for(var i=0; i<listBtn.length; i++){
		listBtn[i].index=i;
		listBtn[i].children[0].children[0].children[0].addEventListener("click", function(e){
			e.preventDefault();
			// console.log(e.currentTarget.parentElement.parentElement.parentElement.index);
			pageNum=e.currentTarget.parentElement.parentElement.parentElement.index; // 수정
			console.log("list pageNum : "+pageNum);

			for(var j=0; j<listBtn.length; j++){
				if(j == pageNum){ // 수정
					secCont.children[4].children[j].classList.add("active");
				}
				else{
					secCont.children[4].children[j].classList.remove("active");
				}
			}
			clickMoving2(e);
		});
	}


	
	nextLink.addEventListener("click", function(e){
		e.preventDefault();
		if(pageNum < 4){
			pageNum+=1;
			console.log("next pageNum : "+pageNum);
			for(var i=0; i<secCont.children[4].children.length; i++){
				if(pageNum == i){
					secCont.children[4].children[i].classList.add("active");
				}
				else{
					secCont.children[4].children[i].classList.remove("active");
				}
			}
		}
		clickMoving2(e);
	});

	function clickMoving2(evt){
		targetY=secCont.children[4].offsetTop;
		var currentY=window.pageYOffset;
		var timer;

		if(navigator.userAgent.indexOf("Chrome") !== -1){ // Chrome일 경우
			window.scrollTo({
				top: targetY,
				behavior: "smooth"
			});
		}
		else{
			// console.log(targetY+" : "+currentY);
			timer=setInterval(function(){
				if(targetY > currentY){
					if(Math.abs(targetY-currentY) > 9){
						currentY+=9;
					}
					else{
						currentY=targetY;
						clearInterval(timer);
					}
				}
				else{
					if(Math.abs(targetY-currentY) > 9){
						currentY-=9;
					}
					else{
						currentY=targetY;
						clearInterval(timer);
					}
				}
				window.scrollTo(0, currentY);
			}, 1);
		}
	}
});