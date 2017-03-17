// JavaScript Document

function showGallery(folderName){
	var numOfPics; 
	var numOfVideos;
	
	switch(folderName){
	case 'drum_circle':
	numOfPics = 4;
	numOfVideos = 0;
	break;	
	
	case 'fire_dance':
	numOfPics = 4;
	numOfVideos = 0;
	break;
	
	case 'drum_show':
	numOfPics = 7;
	numOfVideos = 0;
	break;
	
	case 'animal_kingdom':
	numOfPics = 0;
	numOfVideos = 0;
	break;
	
	case 'theatre':
	numOfPics = 12;
	numOfVideos = 0;
	break;
	
	case 'hollow_man':
	numOfPics = 5;
	numOfVideos = 0;
	break;
	
	case 'puppet_show':
	numOfPics = 12;
	numOfVideos = 0;
	break;
	
	case 'mural_painting':
	numOfPics = 7;
	numOfVideos = 0;
	break;
	
	case 'balloon_act':
	numOfPics = 7;

	break;
	
	}
	
	var markup = '<ul data-orbit>';
	for(var i=1; i<=numOfPics; i++){
		markup += '<li><img src="assets/'+folderName+'/'+i+'.jpg"></li>';
	}
	markup+= '</ul>';
	
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
var galleryMargin = (window.innerWidth/2) - 400;
gallery.style.marginLeft = galleryMargin+'px';
var closeButtonMarkup = '<img src="assets/close_btn.png" alt="close" id="closeBtn" onclick="dismissGallery()" width="30px" />';
gallery.innerHTML+=closeButtonMarkup;
var closeBtn = document.getElementById('closeBtn');
closeBtn.style.position='fixed';
var closeBtnLeft = galleryMargin + 790;
closeBtn.style.left = closeBtnLeft + 'px';
closeBtn.style.top = '45px';
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