$( "#close" ).hide();
$( ".mobile-menu" ).hide();

$( "#hamburger" ).click(function() {
	$( ".mobile-menu" ).slideToggle( "fast", function() {
		$( "#hamburger" ).hide();
		$( "#close" ).show();
	});
});

$( "#close" ).click(function() {
	$( ".mobile-menu" ).slideToggle( "fast", function() {
		$( "#close" ).hide();
		$( "#hamburger" ).show();
	});
});

$( ".mobile-menu" ).click(function() {
	$( ".mobile-menu" ).slideToggle( "fast", function() {
		$( "#close" ).hide();
		$( "#hamburger" ).show();
	});
});	

