
function onMapClick(e) {
    popup
    .setLatLng(e.latlng)
    .setContent("Lokasi yang dipilih: " + e.latlng.toString())
    .openOn(mymap);
}
mymap.on('click', onMapClick);

function onMarkerClick(e) {
    let gambar = document.getElementById('gambar');
    let review = document.getElementById('review');
    gambar.style.backgroundImage = "url(/images/"+e.target.options[1]+"-normal.jpg)";
    review.innerHTML = e.target.options[2];
}

function setMarker(places) {
    let marker;
    for (m of places) {
        marker = L.marker(m.lokasi, [m.sponsor, m.gambar, m.review]).addTo(mymap);
        marker.on('click', onMarkerClick);
        marker.bindTooltip(m.sponsor);
    }
}

(async function (){
    const URL="data/peta.json";
    try {
        let resp= await(fetch(URL));
        let resp2= await resp.json();
        setMarker(resp2.places);
    }
    catch(err){
        console.log(err);
    }
})( );