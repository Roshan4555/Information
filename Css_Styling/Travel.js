	// var x=document.querySelector(".content-place");
	// var y=document.querySelector(".shadow");
	// x.mousemove(function(e){
	// 	var valueX=(e.pageX );
	// 	var valueY=(e.pageY );
	// 	y.css({
	// 'transform':'rotate('valueX+'px)'		
	// 	});
	// });
	var cursor=document.getElementById("myCanvas");
			document.addEventListener("mousemove",function(e){
				var  k=e.pageX;
				var p=e.pageY;
				cursor.style.left=k+"px";
				cursor.style.top=p+"px";
			});
