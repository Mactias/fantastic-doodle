function initMap() {
    const uluru = { lat: 50.053, lng: 20.085 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: uluru,
    });
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}

window.initMap = initMap;

// import { Loader } from '@googlemaps/js-api-loader';

// const loader = new Loader({
//   apiKey: "AIzaSyBv7o8tACOLNvJ5XpueajVwk5ONz7pdAY8",
//   version: "weekly",
//   libraries: ["places"]
// });

// const mapOptions = {
//   center: {
//     lat: 50.053,
//     lng: 20.085
//   },
//   zoom: 13
// };

// // Callback
// loader.loadCallback(e => {
//   if (e) {
//     console.log(e);
//   } else {
//     new google.maps.Map(document.getElementById("map"), mapOptions);
//   }
// });
