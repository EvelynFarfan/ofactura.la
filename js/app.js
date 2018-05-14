var menuHeader = document.querySelectorAll("ul.nav");
var liMenu = document.querySelectorAll("ul.nav li");

for (var i = 0; i < liMenu.length; i++){
	liMenu[i].addEventListener("click", function(){
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace("active", "")
		this.className += " active";
	});
}

jQuery(document).ready(function(){
	$('a[href*="#"]:not([href="#"])').click(function(){
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	    	var target = $(this.hash);
	    	target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	    	if (target.length) {
		      	$('html, body').animate({
		        	scrollTop: target.offset().top
		      	}, 1000);
		      	return false;
	    	}
	  	}
	});
});