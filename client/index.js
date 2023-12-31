const API_HOST = 'http://localhost:8000'

window.addEventListener('DOMContentLoaded', async () => {
    const map = L.map('map').setView([42.46, -76.51], 15);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const pointId = 0;
    const pointResponse = await fetch(`${API_HOST}/points/${pointId}`);
    const pointFeature = await pointResponse.json();

    L.geoJSON(pointFeature).addTo(map);
});

