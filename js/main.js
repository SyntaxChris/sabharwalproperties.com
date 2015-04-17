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
		       	$('.splash.about, .cntnr.about').removeClass('fade-out');
		       	$('.splash.about, .cntnr.about').show();
		        $('.splash.about, .cntnr.about').addClass('fade-in');
		        break;
		    case 'portfolio':
		    	$('.splash, .cntnr').hide();
		    	$('.splash.portfolio').removeClass('fade-out');
		    	$('.splash.portfolio').show();
		        $('.splash.portfolio').addClass('fade-in');
		        break;
		    case 'contact':
		    	$('.splash, .cntnr').hide();
		    	$('.splash.contact').removeClass('fade-out');
		    	$('.splash.contact').show();
		        $('.splash.contact').addClass('fade-in');
		        break;
		}
    });

	$('.member-content').children().on('click', function(e){
		e.stopPropagation();
	});

    $('.cntnr.about').on('click', function(){
    	if($('.name.harsimran').css('display') === 'block'){
    		$('.harsimran').hide();
    		$('.gunit').fadeIn();
    	}
    	else if($('.name.gunit').css('display') === 'block'){
    		$('.gunit').hide();
    		$('.pavit').fadeIn();
    	}
    	else if($('.name.pavit').css('display') === 'block'){
    		 $('.pavit').hide();
    		$('.harsimran').fadeIn();
    	}
    });
	
});