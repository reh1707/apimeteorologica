function base() {
    var local = document.getElementById('local');
    var name = document.getElementById('name');
    var reg = document.getElementById('reg');
    var país= document.getElementById('país');
    var lat= document.getElementById('lat');
    var lon= document.getElementById('lon');
    var k= document.getElementById('k');
    var mil=document.getElementById('mil');
    var cidade = document.getElementById('capital').value;
    fetch('http://api.weatherapi.com/v1/current.json?key=6c7a5c426f724ce3bf6130327231008&q=' + cidade + '&aqi=no')
        .then(data => {
            return data.json();
        })
        .then(data => {
            console.log(data);
            local.innerHTML= data.location.name;
            name.innerHTML= data.location.name;
            reg.innerHTML = data.location.region;
            país.innerHTML = data.location.country;
            lat.innerHTML = data.location.lat;
            lon.innerHTML = data.location.lon;
            k.innerHTML = data.current.vis_km;
            mil.innerHTML = data.current.vis_miles;
        })
        
}

// base()