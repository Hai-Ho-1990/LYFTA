/* Map */
let brommaBttn = document.getElementById('bromma');
let liljeholmenBttn = document.getElementById('liljeholmen');
let tullingeBttn = document.getElementById('tullinge');

function changeMap(x, y) {
    map.setView([x, y], 17);
}

let map = L.map('map').setView([59.38226, 17.89173], 17);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
let marker = L.marker([59.38226, 17.89173]).addTo(map);
let markerL = L.marker([59.30812, 18.01043]).addTo(map);
let markerT = L.marker([59.206122, 17.903022]).addTo(map);

brommaBttn.addEventListener('click', function () {
    changeMap(59.38226, 17.89173);
});

liljeholmenBttn.addEventListener('click', function () {
    changeMap(59.30812, 18.01043);
});

tullingeBttn.addEventListener('click', function () {
    changeMap(59.206122, 17.903022);
});
