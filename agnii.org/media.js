// JavaScript Document

function showGallery(videoID){
	
	var markup = '<div id="vid"><iframe width="640" height="480" src="//www.youtube.com/embed/'+videoID+'?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe></div>';
	
	var gallery = document.getElementById('gallery');
	gallery.innerHTML = markup;
	gallery.style.visibility = 'visible';
	initGallery();
}


function initGallery(){
var grayDiv = document.getElementById('galleryBlur');
grayDiv.style.width = window.innerWidth+'px';
grayDiv.style.height = window.innerHeight+'px';
grayDiv.style.visibility = 'visible';
	document.body.style.overflowY = 'hidden';
var gallery = document.getElementById('gallery');
var galleryMargin = (window.innerWidth/2) - 320;
gallery.style.marginLeft = galleryMargin+'px';
var closeButtonMarkup = '<img src="assets/close_btn.png" alt="close" id="closeBtn" onclick="dismissGallery()" width="30px" />';
gallery.innerHTML+=closeButtonMarkup;
var closeBtn = document.getElementById('closeBtn');
closeBtn.style.position='fixed';
var closeBtnLeft = galleryMargin + 630;
closeBtn.style.left = closeBtnLeft + 'px';
closeBtn.style.top = '95px';
closeBtn.style.zIndex='3';
$(document).foundation();
}

function dismissGallery(){
	var grayDiv = document.getElementById('galleryBlur');
	grayDiv.style.visibility = 'hidden';
	document.body.style.overflowY = 'auto';
		var gallery = document.getElementById('gallery');
	gallery.innerHTML = '';
	gallery.style.visibility = 'hidden';
}