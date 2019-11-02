// JavaScript source code
// Initialize and add the map
function initMap() {
    // The location of Uluru
    var OhioState = { lat: 39.999, lng: -83.013 };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 16, center: OhioState });
    // Marker positioned at Ohio State
    var marker = new google.maps.Marker({ position: OhioState, map: map });
}