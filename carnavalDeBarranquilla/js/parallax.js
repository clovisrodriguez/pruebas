jQuery(document).ready(function(){
  $(window).scroll(function(e){
  	parallaxScroll();
	});

	function parallaxScroll(){
		var scrolled = $(window).scrollTop();
		$('.parallax1').css('margin-top',(0-(scrolled*.25))+'px');
		$('.parallax2').css('margin-top',(0-(scrolled*.4))+'px');
		$('.parallax3').css('margin-top',(0-(scrolled*.75))+'px');
		$('.parallax4').css('margin-bottom',(0-(scrolled*.2)+300)+'px');
		$('.parallax5').css('margin-bottom',(0-(scrolled*.3)+400)+'px');
	}

 });
