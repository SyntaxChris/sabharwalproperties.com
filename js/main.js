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
                $('#map_canvas').css('visibility', 'hidden');
                $('#map_canvas').css('visibility', '0');
		    	$('.splash.home, .cntnr.home').removeClass('fade-out');
		    	$('.splash.home, .cntnr.home').show();
		        $('.splash.home, .cntnr.home').addClass('fade-in');
		        break;
		    case 'about':
		    	$('.splash, .cntnr').hide();
                $('#map_canvas').css('visibility', 'hidden');
                $('#map_canvas').css('visibility', '0');
		       	$('.splash.about, .cntnr.about').removeClass('fade-out');
		       	$('.splash.about, .cntnr.about').show();
		        $('.splash.about, .cntnr.about').addClass('fade-in');
		        break;
		    case 'portfolio':
		    	$('.splash, .cntnr').hide();
                $('#map_canvas').css('visibility', 'visible');
                $('#map_canvas').css('z-index', '30');
		    	$('.splash.portfolio, .cntnr.portfolio').removeClass('fade-out');
		    	$('.splash.portfolio, .cntnr.portfolio').show();
		        $('.splash.portfolio, .cntnr.portfolio').addClass('fade-in');
		        break;
		    case 'contact':
		    	$('.splash, .cntnr').hide();
                $('#map_canvas').css('visibility', 'hidden');
                $('#map_canvas').css('z-index', '0');
		    	$('.splash.contact, .cntnr.contact').removeClass('fade-out');
		    	$('.splash.contact, .cntnr.contact').show();
		        $('.splash.contact, .cntnr.contact').addClass('fade-in');
		        break;
		}
    });


	$('.member-content').children().on('click', function(e){
		e.stopPropagation();
	});

    $('.cntnr.about').on('click', function(){
    	$('.pagnation').removeClass('fill');
    	if($('.name.harsimran').css('display') === 'block'){
    		$('.harsimran').hide();
    		$('.gunit').fadeIn();
    		$('.g').addClass('fill');
    	}
    	else if($('.name.gunit').css('display') === 'block'){
    		$('.gunit').hide();
    		$('.pavit').fadeIn();
    		$('.p').addClass('fill');
    	}
    	else if($('.name.pavit').css('display') === 'block'){
    		 $('.pavit').hide();
    		$('.harsimran').fadeIn();
    		$('.h').addClass('fill');
    	}
    });

    $('.tab').on('click', function(){
    	var tab = $(this);
    	$('.tab').removeClass('selected');
    	tab.addClass('selected');
    	if(tab.hasClass('retail')){
    		$('.list').hide();
    		$('.list.retail').fadeIn();
    	}
    	else if(tab.hasClass('commercial')){
    		$('.list').hide();
    		$('.list.commercial').fadeIn();
    	}
    	else if(tab.hasClass('multi')){
    		$('.list').hide();
    		$('.list.multi').fadeIn();
    	}
    });

    $('.list-hov').on('click', function(){
        var id = $(this).attr('id');
        $('iframe').css('visibility', 'hidden');
        $('.'+ id).css('visibility', 'visible');

    });
	
});