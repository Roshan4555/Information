 $(document).ready(function(){
$('.location-name').textillate({
inEffects:["fadeIn"],
        });
    });
 function Read(){
 	var dot=document.querySelector("#dots");
  	var more=document.querySelector("#more");
  	var btntext=document.querySelector(".readless-button");

  	if(dot.style.display=="none"){
  		dot.style.display="inline";
  		btntext.innerHTML="Read more";
  		more.style.display='none';
  	}
  	else{
  		dot.style.display="none";
  		more.style.display='inline';
  		btntext.innerHTML="Read less";
  	}
 }
