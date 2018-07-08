$('#slideshow').hover(function(ev){
    clearInterval(timer);
}, function(ev){
    timer = setInterval( nextSlide, 10000);
});