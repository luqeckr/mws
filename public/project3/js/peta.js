
let circle = L.circle([-5.153585, 119.4385239], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
}).addTo(mymap);
circle.bindPopup("<b>Tempat meetup disini!</b><br>yes!").openPopup();
let popup = L.popup();

function onMapClick(e) {
    popup
    .setLatLng(e.latlng)
    .setContent("Lokasi yang dipilih: " + e.latlng.toString())
    .openOn(mymap);
}
mymap.on('click', onMapClick);

let arr_marker= [
    {loc: [-5.134627, 119.490707], titel: 'PTIK UNHAS', pic: 'ptik', txt: '<strong>PTIK Unhas</strong> - Kantor bersejarah<br>Lokasi: Kampus UNHAS Tamalanrea'},
    {loc: [-5.139906, 119.488468], titel: 'Pintu 1 Unhas', pic: 'p1unhas', txt: 'Tempat jalan2/olahraga dihari libur<br>Lokasi: Pintu 1 Unhas Tamalanrea'},
    {loc: [-5.143144, 119.490491], titel: 'Warung Sederhana', pic: 'warung_sederhana', txt: 'Warung ikan bakar murah meriah dan enak<br>Lokasi: Jl. Perintis Kemerdekaam 4, Tamalanrea'},
    {loc: [-5.144563, 119.465105], titel: 'Tirta Lontara', pic: 'kolamrenang', txt: 'Kolam renang Tirta Lontara<br>Lokasi: Kodam VII Wirabuana Makassar'},
    {loc: [-5.141731, 119.484666], titel: 'Sop Sodara', pic: 'sopsodara', txt: 'Sop Sodara Enak!<br>Lokasi: jl. Perintis Kemerdekaan, km. 9'},
    // {loc: [-5.153585, 119.4385239], pic: 'pic', txt: 'Keterangan'}
];
function onMarkerClick(e) {
    let gambar = document.getElementById('gambar');
    let review = document.getElementById('review');
    gambar.style.backgroundImage = "url(/images/"+e.target.options[1]+"-normal.jpg)";
    review.innerHTML = e.target.options[2];
}
let marker;
for (m of arr_marker) {
    console.log(m);
    marker = L.marker(m.loc, [m.titel, m.pic, m.txt]).addTo(mymap);
    marker.on('click', onMarkerClick);
    marker.bindTooltip(m.titel);
}