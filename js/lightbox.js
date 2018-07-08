var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");

function lightbox_open(){
if (screen.width <= 699) {
document.location = "http://giririni.com/video/our-story.3gp"; }
else if (isAndroid) {
	// Do something!
	// Redirect to Android-compatible?
	window.location = 'http://giririni.com/video/our-story.3gp';
}
else {
	window.scrollTo(0,0);
	document.getElementById('light').style.display='block';
	document.getElementById('fade').style.display='block'; }
}

function lightbox_close(){
	document.getElementById('light').style.display='none';
	document.getElementById('fade').style.display='none';
}

var myAudio=document.getElementById("backsound"); 

function playAudio()
  { 
  myAudio.play(); 
  } 

function pauseAudio()
  { 
  myAudio.pause(); 
}

