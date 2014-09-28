$( document ).ready(function() {
	$("a").click(function(){

		var href = $(this).attr("href");
		var title = $(this).text();
		//alert(title);

		window.history.pushState("", title, href);
		$("#live-page").load(href + ".html #test");
		//$("#live-page").html(title + '  ' + href);
		return false;

	});


});