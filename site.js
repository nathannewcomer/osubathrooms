// JavaScript source code
// Initialize and add the map
function initMap() {
    // The location of Ohio State
    var OhioState = { lat: 39.999, lng: -83.013 };

    // The map, centered at Ohio State
    //Initializing the map
    var map = new google.maps.Map(document.getElementById('map'),
        {
            zoom: 16,
            center: OhioState,
            restriction: { latLngBounds: { north: 40.006563, south: 39.995, west: -83.02374, east: -83.008 } }
        });
    // Marker positioned at Ohio State
    var marker = new google.maps.Marker({ position: OhioState, map: map });
}