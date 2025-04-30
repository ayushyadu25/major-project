
mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    center: coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 9 // starting zoom
});

console.log(coordinates);
const marker1 = new mapboxgl.Marker()
    .setLngLat(coordinates)
    .addTo(map);

const marker = new mapboxgl.Marker({ color: "red" })
    .setLngLat(coordinates) // or listing.geometry.coordinates
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML("<h4>Exact Location provided after booking</h4>")
    )
    .addTo(map);

