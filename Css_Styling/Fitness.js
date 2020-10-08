        var cursor=document.getElementById("myCanvas");
            document.addEventListener("mousemove",function(e){
                var  k=e.pageX;
                var p=e.pageY;
                cursor.style.left=k+"px";
                cursor.style.top=p+"px";
            })
            function scrollfunction(){
            document.documentElement.scrollTop=0;   
            }
         window.onload = function() {
    lax.setup({
        breakpoints: { small: 0, large: 992 }
    }) // init

    const updateLax = () => {
        lax.update(window.scrollY)
        window.requestAnimationFrame(updateLax)
    }

    window.requestAnimationFrame(updateLax)

};
        $(document).ready(function(){
$('.Fitness-title').textillate({
inEffects:["BounceIn"],
        });
    });
        const rellax=new Rellax('.rellax');