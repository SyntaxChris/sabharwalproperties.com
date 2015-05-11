$( document ).ready(function() {

	window.onload = function() {
	    initialize(40.8237139, -73.9173795, "300 E. 159th St.");
	}

	function initialize(lat, long, title) {
	    var myLatlng = new google.maps.LatLng(lat, long);

	    var myOptions = {
	        zoom: 12,
	        center: myLatlng,
	        mapTypeId: google.maps.MapTypeId.ROADMAP
	    }
	    
	    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	     
	    var infowindow = new google.maps.InfoWindow({
	        content: "Sabharwal Properties - " + title
	    });
	     
	    var marker = new google.maps.Marker({
	        position: myLatlng,
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

		initialize(lat, long, title);
	});
});