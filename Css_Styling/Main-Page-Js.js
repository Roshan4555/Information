		    var cursor=document.getElementById("myCanvas");
			document.addEventListener("mousemove",function(e){
				var  k=e.pageX;
				var p=e.pageY;
				cursor.style.left=k+"px";
				cursor.style.top=p+"px";
			});
				function change(){
					var title1=document.getElementById("background-image-change");
					title1.src="Images\\Biography.jpg";
				    var gettitle=document.getElementById("flex-title-display");
                    gettitle.innerHTML="Biography";
                    document.getElementById("left").innerHTML="01";
                }
				function change1(){
					var title2=document.getElementById("background-image-change").src="Images\\Technology.jpg";
				    var gettitle=document.getElementById("flex-title-display");
                    gettitle.innerHTML="Technology";
                    document.getElementById("left").innerHTML="02";   
				}
				function change2(){
					var title3=document.getElementById("background-image-change").src="Images\\Fitness.jpg";
				    var gettitle=document.getElementById("flex-title-display");
                    gettitle.innerHTML="Fitness";
                    document.getElementById("leftvalue").innerHTML="03";
				}
				function change3(){
					var title4=document.getElementById("background-image-change").src="Images\\Travel.jpg";
				    var gettitle=document.getElementById("flex-title-display");
                    gettitle.innerHTML="Travel";
                    document.getElementById("leftvalue").innerHTML="04";
				}
				function change4(){
					var title5=document.getElementById("background-image-change").src="Images\\Hospitality.jpg";
				    var gettitle=document.getElementById("flex-title-display");
                    gettitle.innerHTML="Hospitality";
                    document.getElementById("leftvalue").innerHTML="05";
				}
				function change5(){
					var title6=document.getElementById("background-image-change").src="Images\\Introspection.jpg";
				    var gettitle=document.getElementById("flex-title-display");
                    gettitle.innerHTML="Processors";
                    document.getElementById("leftvalue").innerHTML="06";
				}

		var mainslider=document.getElementById("sliderid");
		var valueslider=document.getElementById("left");
		valueslider.innerHTML=mainslider.value;
		mainslider.oninput=function(){
			valueslider.innerHTML=this.value;
		}
		// var min = document.getElementById("slider").min;
		// min=10;
		function myFunction(x) {
			x.classList.toggle("change");
		  }