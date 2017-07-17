// JavaScript Document


var navItems = ["home", "about", "activities", "contact", "media", "gallery"];
var navURLs = ["index.html", "about.html", "activities.html", "contact.html", "media.html", "gallery.html"];

function loadSocial(){
document.getElementById('social').innerHTML = '<iframe src="http://www.facebook.com/plugins/likebox.php?href=https%3A%2F%2Fwww.facebook.com%2Fagniiartforall&amp;width=350&amp;height=258&amp;show_faces=true&amp;colorscheme=light&amp;stream=false&amp;show_border=true&amp;header=false" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:350px; height:258px;" allowTransparency="true" id="fbIframe"></iframe>';	
	
}

//FB.api(
 // '/rudrayya003/feed?limit=30&format=json',
  //'GET',
  //{},
 // function(response) {
      // Insert your code here
	  
//  }
//);


function loadHeader(){
var headerDiv = document.getElementById("header");

headerDiv.innerHTML = '<div id="logo"><img src="assets/logo.png" id="logoPNG"/></div>';

//alert(getFileName(document.URL));
//isThisPage(navURLs[1]);
var navBar = '<div id="navbar">';

for (var i = 0; i<navItems.length; i++){
navBar += '<span class="navbarItems" id="navItem'+i+'"><a href="'+navURLs[i]+'">'+navItems[i]+'</a></span>';


}


navBar += '</div>';
headerDiv.innerHTML += navBar;
for(var i = 0; i<navItems.length; i++){
if(isThisPage(navURLs[i])){
	var temp = "navItem"+i;
var thisNavItem = document.getElementById(temp);
thisNavItem.style.color = "#C42311";
}
}
var lastItemId = navItems.length-1;
var lastItem = document.getElementById("navItem"+lastItemId);
lastItem.style.paddingRight = 0;

var badge = document.getElementById('designedBy');
badge.innerHTML='<a href="http://www.krisprajapati.com"><img src="http://krisprajapati.com/external_sites/badge.png" id="designedByImg"/></a>';

}

function isThisPage(navURL){
var	url = document.URL;
var filename = "";

if(url){

m = url.toString().match(/.*\/(.+?)\./);
if(m && m.length >1){
	filename = m[1];	
}
filename += ".html";

}

if(filename == navURL){
return true;
}

else
return false;


}