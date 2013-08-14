var speed = 'fast';
$(document).ready(function() {
	//onLoad
	$('#content').hide();
	//$('#mapcontent').show();
	$('#gamecontent').hide();
	$('#top').hide();
	$('#top2').hide();
	//Lists
	$('#citylist').show();
	$('#unilist').hide();

	//Main Menu Buttons
	$(".button.list").click(function(){
		menuList();
	});
	$(".button.map").click(function(){
		menuMap();
	});
	$(".button.game").click(function(){
		menuGame();
	});

	//List Menu back button
	//funtion for android back button
	//document.addEventListener("backbutton", onBackKeyDown, false);
	//var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
	$(".back").click(function(){
		menuBack();
	});

	//Cities / Universities toggle at list menu
	$('#btncity').click(function() {
		$('#citylist').show();
		$('#unilist').hide();
	});
	$('#btnuni').click(function() {
		$('#citylist').hide();
		$('#unilist').show();
	});
	
});

//unified functions for controlling button beheviour
function menuList() {
	$('#top').show();
	$('#content').show();
	$("#bottom").animate({left:"-200%"},speed);
	$("#logo").animate({left:"-200%"},speed);
	$("#top").animate({left:"0"},speed);
	$("#content").animate({left:"0"},speed);
};

function menuMap() {
	$('#top2').show();
	$('#mapcontent').show();
	$("#bottom").animate({left:"-200%"},speed);
	$("#logo").animate({left:"-200%"},speed);
	$("#toptitle").html("Žemėlapis");
	$("#top2").animate({left:"0"},speed);
	$("#mapcontent").animate({left:"0"},speed);
};

function menuGame() {
	$('#top2').show();
	$('#gamecontent').show();
	$("#bottom").animate({left:"-200%"},speed);
	$("#logo").animate({left:"-200%"},speed);
	$("#toptitle").html("Žaidimas");
	$("#top2").animate({left:"0"},speed);
	$("#gamecontent").animate({left:"0"},speed);
};

function menuBack() {
	$('#top').hide();
	$('#top2').hide();
	$('#content').hide();
	$('#mapcontent').hide();
	$('#gamecontent').hide();
	$("#top").animate({left:"200%"},speed);
	$("#content").animate({left:"200%"},speed);
	$("#mapcontent").animate({left:"200%"},speed);
	$("#gamecontent").animate({left:"200%"},speed);
	$("#bottom").animate({left:"0"},speed);
	$("#logo").animate({left:"50%"},speed);
};
	
//new functions compatible with auto-population
function toggleZones(title) {
	$('#zones-of-'+title).slideToggle(speed);
};

function toggleEvents(title) {
	$('#events-of-'+title).slideToggle(speed);
};