$( document ).ready(function() {
	$('.splash.home').css('display', 'block');
	$('.splash.home').addClass('fade-in');

    $('.nav-btn').on('click', function(){
    	var navBtn = $(this).attr('id');
    	$('.splash').addClass('fade-out');

		switch(navBtn) {
		    case 'home':
		    	$('.splash').hide();
		    	$('.splash.home').removeClass('fade-out');
		    	$('.splash.home').show();
		        $('.splash.home').addClass('fade-in');
		        break;
		    case 'about':
		    	$('.splash').hide();
		       	$('.splash.about').removeClass('fade-out');
		       	$('.splash.about').show();
		        $('.splash.about').addClass('fade-in');
		        break;
		    case 'portfolio':
		    	$('.splash').hide();
		    	$('.splash.portfolio').removeClass('fade-out');
		    	$('.splash.portfolio').show();
		        $('.splash.portfolio').addClass('fade-in');
		        break;
		    case 'contact':
		    	$('.splash').hide();
		    	$('.splash.contact').removeClass('fade-out');
		    	$('.splash.contact').show();
		        $('.splash.contact').addClass('fade-in');
		        break;
		}
    });
});