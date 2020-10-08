function myFunction(x) {
    x.classList.toggle("change");
  }
  var cursor=document.getElementById("myCanvas");
			document.addEventListener("mousemove",function(e){
				var  k=e.pageX;
				var p=e.pageY;
				cursor.style.left=k+"px";
				cursor.style.top=p+"px";
			});
				function change(){
					var title1=document.getElementById("background-image");
					title1.src="Images\\Biography.jpg";
				    var gettitle=document.getElementById("flex-title-display");
                    gettitle.innerHTML="Biography";
                    // document.getElementById("distitle").style.left="140px";
                    document.getElementById("leftvalue").innerHTML="01";
                    // document.getElementById("sliderid").innerHTML="2";
				}
				function change1(){
					var title2=document.getElementById("background-image").src="Images\\Technology.jpg";
				    var gettitle=document.getElementById("flex-title-display");
                    gettitle.innerHTML="Technology";
                    // document.getElementById("distitle").style.left="60px";
                    document.getElementById("leftvalue").innerHTML="02";   
				}
				function change2(){
					var title3=document.getElementById("background-image").src="Images\\Fitness.jpg";
				    var gettitle=document.getElementById("flex-title-display");
                    gettitle.innerHTML="Fitness";
                    // document.getElementById("distitle").style.left="340px";
                    document.getElementById("leftvalue").innerHTML="03";
				}
				function change3(){
					var title4=document.getElementById("background-image").src="Images\\Travel.jpg";
				    var gettitle=document.getElementById("flex-title-display");
                    gettitle.innerHTML="Travel";
                    // document.getElementById("distitle").style.left="360px";
                    document.getElementById("leftvalue").innerHTML="04";
				}
				function change4(){
					var title5=document.getElementById("background-image").src="Images\\Hospitality.jpg";
				    var gettitle=document.getElementById("flex-title-display");
                    gettitle.innerHTML="Hospitality";
                    // document.getElementById("distitle").style.left="100px";
                    document.getElementById("leftvalue").innerHTML="05";
				}
				function change5(){
					var title6=document.getElementById("background-image").src="Images\\Introspection.jpg";
				    var gettitle=document.getElementById("flex-title-display");
                    gettitle.innerHTML="Processors";
                    // document.getElementById("distitle").style.left="80px";
                    document.getElementById("leftvalue").innerHTML="06";
				}
		// var mainslider=document.getElementById("sliderid");
		// var valueslider=document.getElementById("leftvalue");
		// valueslider.innerHTML=mainslider.value;
		// mainslider.oninput=function(){
		// 	valueslider.innerHTML=this.value;
		// }
        