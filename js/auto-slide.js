//set a global var to keep track of the slide we're on
window.slide = 1
function nextSlide(){
   //increase window.slide by 1 (to go to the next slide), 
   //or if it is 3 return to the first slide
   window.slide == 4 ? window.slide = 1 : window.slide++;
   //trigger click event on the NEXT slide only
   $('a[href=#slide'+window.slide+']').click()
}

    timer = setInterval( nextSlide, 10000);