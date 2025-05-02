mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map', // ID of the div where the map should render
    style: 'mapbox://styles/mapbox/streets-v12',
    center: listing.geometry.coordinates, // longitude, latitude (example: Delhi)
    zoom: 10
});

const marker = new mapboxgl.Marker({color: "red"})
    .setLngLat(listing.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({offset: 25}).setHTML(
            `<h4>${listing.location}</h4><p>Exact location will be provided after booking</p>`
        )
    )
    .addTo(map);
