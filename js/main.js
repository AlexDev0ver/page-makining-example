//=== adaptive menu ===
	function responsive () {
		if ( document.documentElement.clientWidth >= 786 ) {
			$('#burg').addClass('hide')
			$('#menu').addClass('bar')
			$('#nav').addClass('desktop')
			$('#ul-menu').addClass('ul-desktop')
			$('#menu').removeClass('mobile-tab')
			$('#nav').removeClass('mobile')
			$('#ul-menu').removeClass('ul-mobile')
		} else {
			$('#menu').addClass('mobile-tab')
			$('#nav').addClass('mobile')
			$('#ul-menu').addClass('ul-mobile')								
			$('#burg').removeClass('hide')
			$('#menu').removeClass('bar')
			$('#nav').removeClass('desktop')
			$('#ul-menu').removeClass('ul-desktop')
		}
	}
	responsive()
	$(window).resize(responsive)

	$('.mobile-tab').hide();
	$('#burg').click (function () {
			$('#menu').slideToggle(400)
	})
// === adaptive menu end ===

// === scrollUp ===
	$(window).scroll(function () {
		if ($(this).scrollTop()>100) {
			$('.scrollup').fadeIn()
		} else {
			$('.scrollup').fadeOut()
		}
	})

	$('.scrollup').click(function() {
		$('html,body').animate({scrollTop:0},2000)
	})