$(document).ready(function() {
    
	var s_height=$(window).outerHeight();
	$(".landing-page").height(s_height);
	//console.log($(".landing-page").height());
	
	$(".menu-link").click(function()
	{
		$("#main-page").css({"display":"block"});
		$("body, html").animate({
			scrollTop: $("#main-page").offset().top},1000);
		//$("#main-page header").css({"position":"fixed", "top":"0px"});
	});
		
	$("a").click(function()
	{
		var id=$(this).attr("href");
		//console.log(id);
		$("body, html").animate({
			scrollTop: $(id).offset().top},1000);
	});
	
	
	$(window).scroll(function()
	{
		if($(this).scrollTop() > $(".landing-page").height() )
		{
			//alert("thanks");
			$("#main-page header").css({"position":"fixed", "top":"0px", "border-bottom":"5px solid red"});
		}
		else
		{
			$("#main-page header").css({"position":"relative", "border":"none"});
		}
	});
	
});