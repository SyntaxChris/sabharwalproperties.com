$( document ).ready(function() {
    $('iframe').css('visibility', 'hidden');
	$('.splash.home, .cntnr.home').css('display', 'block');
	$('.splash.home, .cntnr.home').addClass('fade-in');
	$('.h').addClass('fill');
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
		    	$('.splash.portfolio, .cntnr.portfolio').removeClass('fade-out');
		    	$('.splash.portfolio, .cntnr.portfolio').show();
		        $('.splash.portfolio, .cntnr.portfolio').addClass('fade-in');
		        break;
		    case 'contact':
		    	$('.splash, .cntnr').hide();
                $('#map-canvas').css('visibility', 'hidden');
                $('#map-street-canvas').css('visibility', 'hidden');
                $('#map-canvas').css('z-index', '0');
                $('#map-street-canvas').css('z-index', '0');
                $('#map-canvas').removeClass('fade-in');
                $('#map-street-canvas').removeClass('fade-in');
		    	$('.splash.contact, .cntnr.contact').removeClass('fade-out');
		    	$('.splash.contact, .cntnr.contact').show();
		        $('.splash.contact, .cntnr.contact').addClass('fade-in');
		        break;
		}
    });


	$('.member-content').children().on('click', function(e){
		e.stopPropagation();
	});

    $('.tab.commercial').addClass('selected');

    $('.tab').on('click', function(){
    	var tab = $(this);
    	$('.tab').removeClass('selected');
    	tab.addClass('selected');
    	if(tab.hasClass('commercial')){
    		$('.list').hide();
    		$('.list.commercial').fadeIn();
    	}
    	else if(tab.hasClass('residential')){
    		$('.list').hide();
    		$('.list.residential').fadeIn();
    	}
    });

    $('.list-hov').on('click', function(){
        var id = $(this).attr('id');
        $('iframe').css('visibility', 'hidden');
        $('.'+ id).css('visibility', 'visible');

    });	
});