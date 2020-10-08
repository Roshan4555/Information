		function displaytext(){
			var x=document.getElementById("t2");
			var y=document.getElementById("t3");
            x.innerHTML=y.innerHTML;
            x.style.transition="2s";
            x.scrollIntoView({behavior:'smooth',block:'start'});

            // x.scrollIntoView({behavior:'smooth',block:start});
		}
		function scrollfunction(){
            document.documentElement.scrollTop=0;   
            }
		    var cursor=document.getElementById("myCanvas");
			document.addEventListener("mousemove",function(e){
				var  k=e.pageX;
				var p=e.pageY;
				cursor.style.left=k+"px";
				cursor.style.top=p+"px";
			});


