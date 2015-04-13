$( document ).ready(function() {
	$('.splash.home, .cntnr.home').css('display', 'block');
	$('.splash.home, .cntnr.home').addClass('fade-in');

    $('.nav-btn').on('click', function(){
    	var navBtn = $(this).attr('id');
    	$('.splash').addClass('fade-out');

		switch(navBtn) {
		    case 'home':
		    	$('.splash, .cntnr').hide();
		    	$('.splash.home, .cntnr.home').removeClass('fade-out');
		    	$('.splash.home, .cntnr.home').show();
		        $('.splash.home, .cntnr.home').addClass('fade-in');
		        break;
		    case 'about':
		    	$('.splash, .cntnr').hide();
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