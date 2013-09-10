$(document).ready(function() {

	//For homepage popup
	$(".group1").colorbox({
	 	rel:'group1', 
	 	open:true,
	 	slideshow: true,
		slideshowSpeed: 6000,
		speed: 700,
		maxWidth:'100%', maxHeight:'100%'
	}); 

	//for map on homepage
	var map = L.mapbox.map('map', 'muyiwaoyeniyi.map-tub85m7l');
	// The GeoJSON representing the two point features
	var geoJson = {
	    type: 'FeatureCollection',
	    features: [{
	        type: 'Feature',
	        properties: {
	            title: 'Los Angeles',
	            'marker-color': '#f63a39',
	            'marker-size': 'small',
	            'marker-symbol': 'circle',
	            url: '/los_angeles'
	        },
	        geometry: {
	            type: 'Point',
	            coordinates: [-118.227997, 34.054935]
	        }

	    },
    	{
        	type: 'Feature',
        	properties: {
            	title: 'Washington, DC',
            	'marker-color': '#483C32',
            	'marker-size': 'small',
            	'marker-symbol': 'circle',
            	url: '#'
        	},
        	geometry: {
            	type: 'Point',
            	coordinates: [-77.014160, 38.891033]
        	}
        },
    	{
        	type: 'Feature',
        	properties: {
            	title: 'Chicago',
            	'marker-color': '#483C32',
            	'marker-size': 'small',
            	'marker-symbol': 'circle',
            	url: '#'
        	},
        	geometry: {
            	type: 'Point',
            	coordinates: [-87.648926, 41.902277]
        	}
	    }]
	};
	// Pass features and a custom factory function to the map
	map.markerLayer.setGeoJSON(geoJson);
	map.markerLayer.on('click', function(e) {
	    e.layer.unbindPopup();
	    window.location = (e.layer.feature.properties.url);
	});

});