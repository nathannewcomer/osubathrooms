// JavaScript source code
// Initialize and add the map
var OhioState = { lat: 39.999, lng: -83.013 };
function initMap() {
    // The location of Ohio State


    // The map, centered at Ohio State
    //Initializing the map
    var map = new google.maps.Map(document.getElementById('map'),
        {
            zoom: 16,
            center: OhioState,
            restriction: { latLngBounds: { north: 40.006563, south: 39.995, west: -83.02374, east: -83.008 } }
        });
    //Stlying the map and hiding businesses
    var mapStyle = [
        {
            featureType: "poi.business",
            stylers: [{ visibility: "off", }]
        },
        {
        featureType: 'road',
        elementType: 'geometry',
            stylers: [{ color: 'red' }]
        }
          ];
        map.setOptions({ styles: mapStyle });
    // Marker positioned at Ohio State
    
    var OhioUnionLoc = { lat: 39.998003, lng: -83.008852 };
        var OhioUnion = new google.maps.Marker({ position: OhioUnionLoc, map: map })
}
