$( document ).ready(function() {

	window.onload = function() {
	    initialize(40.8237139, -73.9173795, "300 E. 159th St.");
	}

	function initialize(lat, long, title) {
	    var myLatLong = new google.maps.LatLng(lat, long);

	    var mapOptions = {
	        zoom: 12,
	        center: myLatLong,
	        mapTypeId: google.maps.MapTypeId.ROADMAP,
	        streetViewControl: false
	    }

	   	var streetViewOptions = {
	    	position: myLatLong,
	    	pov: {
	    		heading: 0,
	    		pitch: 0
	    	}
	    }
	    
	    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	    var streetView = new google.maps.StreetViewPanorama(document.getElementById('map-street-canvas'), streetViewOptions);
	    map.setStreetView(streetView);
	     
	    var infowindow = new google.maps.InfoWindow({
	        content: "Sabharwal Properties - " + title
	    });
	     
	    var marker = new google.maps.Marker({
	        position: myLatLong,
	        map: map,
	        title: "300 E. 159th St."
	    });

	    google.maps.event.addListener(marker, 'click', function() {
	        infowindow.open(map,marker);
	    });
	}

	$('.list-hov').on('click', function(){
		var list = $(this);
		var lat = list.data('lat');
		var long = list.data('long');
		var title = list.text();
		$('.list-hov').css({
			'background' : 'none',
			'color'      : 'black',
			'opacity'    : 1
		});

		list.css({
			'background' : 'black',
			'color'      : 'white',
			'opacity'    : 0.8
		});
		initialize(lat, long, title);
	});
});