$(document).ready(function (){
	$("#about").click(function() {
    	$('html, body').animate({
        scrollTop: $("#about").offset().top
    	}, 2000);
	});
	
	$("#technologies").click(function() {
    	$('html, body').animate({
        scrollTop: $("#technologies").offset().top
    	}, 2000);
	});
});