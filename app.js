const mymap = L.map('mapid').setView([39.00496, 22.9248], 6);
const $card = $('.card');
let markers = {};
let defaultClass = 'tsigourof_ben6oqe';
let xyOnClick = false;
const data = [
  {
    userName:'Veniamin Tsigourof',
    udacityForumUserName:'style1',
    placeName:'Thassos, Ancient Quarries',
    altPlaceName:'Αλυκή Θάσσου, Αρχαία Λατομεία',
    description:'Alykes is a peninsula of archaeological interest where the ancient quarry of marble is situated. The quarry of marble was used from the ancient to byzantine years. Huge marble rocks are discernible under the surface of the sea.',
    latLong:[40.60436,24.74364],
    imgUrl:'./img/thassos_aliki.jpg',
    country:'Greece',
    cardText: 'Additionally, the ancient dorp is of great archaeological interest. On the highest spot, there are the remnants of two palaeo-Christian basilicas of the 5th century that where places that welcomed the worshipers until the pre-Christian years. In the sanctum many sailors had been frequent visitors because they had been travelling to the island in order to transfer marble. The sailors used to engrave on the stepping-stones the names of their beloved ones and theirs, too.',
    cardList: [["Text from &ltspan&gt Element: ","Text from &ltli&gt element"],["Text from &ltspan&gt Element: ","Text from &ltli&gt Element"],["Text from &ltspan&gt Element: ","Text from &ltli&gt lement"],["Text from &ltspan&gt Element: ","Text from &ltli&gt element"]]
  },
  {
    userName:'Veniamin Tsigourof',
    udacityForumUserName:'style2',
    placeName:'Patmos, Xora',
    altPlaceName:'Πάτμος, Χώρα',
    description:'Η Πάτμος είναι ελληνικό νησί του Αιγαίου Πελάγους υπαγόμενο, κατά τους αρχαίους Έλληνες, στις Νότιες Σποράδες, κατά δε τη σύγχρονη πολιτική διαίρεση της χώρας στη Δωδεκάνησο.',
    latLong:[37.30903, 26.54765],
    imgUrl:'./img/patmos_xwra.jpeg',
    country:'Greece',
    cardText: 'Additionally, the ancient dorp is of great archaeological interest. On the highest spot, there are the remnants of two palaeo-Christian basilicas of the 5th century that where places that welcomed the worshipers until the pre-Christian years. In the sanctum many sailors had been frequent visitors because they had been travelling to the island in order to transfer marble. The sailors used to engrave on the stepping-stones the names of their beloved ones and theirs, too.',
    cardList: [["Text from &ltspan&gt Element: ","Text from &ltli&gt element"],["Text from &ltspan&gt Element: ","Text from &ltli&gt Element"],["Text from &ltspan&gt Element: ","Text from &ltli&gt lement"],["Text from &ltspan&gt Element: ","Text from &ltli&gt element"]]
  },
  {
    userName:'Veniamin Tsigourof',
    udacityForumUserName:'tsigourof_ben6oqe',
    placeName:'Mount Beshtau',
    altPlaceName:'Бештау',
    description:'Бешта́у — изолированная пятиглавая гора — лакколит, высочайшая из 17 останцовых магматических гор Пятигорья на Кавказских Минеральных Водах. Высота 1400м. Памятник природы. Дала название окружающей местности (Пятигорье) и городу Пятигорску.',
    latLong:[44.09749, 43.02235],
    imgUrl:'./img/beshtau.jpg',
    country:'Russia',
    cardText: 'Additionally, the ancient dorp is of great archaeological interest. On the highest spot, there are the remnants of two palaeo-Christian basilicas of the 5th century that where places that welcomed the worshipers until the pre-Christian years. In the sanctum many sailors had been frequent visitors because they had been travelling to the island in order to transfer marble. The sailors used to engrave on the stepping-stones the names of their beloved ones and theirs, too.',
    cardList: [["Text from &ltspan&gt Element: ","Text from &ltli&gt element"],["Text from &ltspan&gt Element: ","Text from &ltli&gt Element"],["Text from &ltspan&gt Element: ","Text from &ltli&gt lement"],["Text from &ltspan&gt Element: ","Text from &ltli&gt element"]]
  },
  {
    userName: 'Thomas Zegos',
    udacityForumUserName: "ThomasZ",
    placeName: "Serres, Upper Poroia",
    altPlaceName: "Σέρρες, Άνω Πορόια",
    description: "Upper Poroia is a large settlement of Serres in Macedonia. It is built on the foot of Mount Belles northwest of Lake Kerkini. It 's an alternative and homely place for relaxion. Horseback riding and hiking are remarkable entertaining activities you couldn't lose.",
    latLong:[41.285892, 23.035583],
    imgUrl: "https://image.ibb.co/m1PiUR/Ano_Poroia.jpg", //"./img/Ano-Poroia.jpg",
    country: "Greece",
    cardText: 'Additionally, the ancient dorp is of great archaeological interest. On the highest spot, there are the remnants of two palaeo-Christian basilicas of the 5th century that where places that welcomed the worshipers until the pre-Christian years. In the sanctum many sailors had been frequent visitors because they had been travelling to the island in order to transfer marble. The sailors used to engrave on the stepping-stones the names of their beloved ones and theirs, too.',
    cardList: [["Text from &ltspan&gt Element: ","Text from &ltli&gt element"],["Text from &ltspan&gt Element: ","Text from &ltli&gt Element"],["Text from &ltspan&gt Element: ","Text from &ltli&gt lement"],["Text from &ltspan&gt Element: ","Text from &ltli&gt element"]]
  },
  //To add a new pin on the map Uncomment lines 46 to 53 and change the values
  // userName: 'Your Real Name', //not required but will probably added somewher in the page in a latter update
  // udacityForumUserName: "ThomasZ",
  // placeName: "Serres, Upper Poroia",
  // altPlaceName: "Σέρρες, Άνω Πορόια",
  // description: "this text goes for descritption.",
  // latLong:[43.285892, 22.035583],
  // imgUrl: "./img/placeholder.jpg",
  // country: "Greece",
  // cardText: 'more text goes here.',
  // cardList: [["Text from first span goes here: ","Text from the first li goes here "],["Text from &ltspan&gt Element: ","Text from &ltli&gt Element"],["Text from &ltspan&gt Element: ","Text from &ltli&gt lement"],["Text from &ltspan&gt Element: ","Text from &ltli&gt element"]]

];
/****************************
Leaflet - Initialize map
***************************/
L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '<a href="https://carto.com/">Carto </a>|   <a href="https://www.openstreetmap.org">OpenStreetMap</a>',
}).addTo(mymap);
/****************************
 Leaflet  - EXTENDING THE ICON CLASS- snippet from https://stackoverflow.com/questions/25683871/assign-id-to-marker-in-leaflet
 ****************************/
const MarkerIcon = L.Icon.extend({
  options: {
      customId: ""
  }
});
//This is used to create the option customId on the MarkerIcon that will work as unique id for each marker on the map and for each element of the markers object
/****************************
 Leaflet - Icons - markers
***************************/
const myDefaultMarker = new MarkerIcon({
  customId: "",
  iconUrl: 'https://unpkg.com/leaflet@1.3.1/dist/images/marker-icon-2x.png',
  iconSize: [25,41]
});
//  const iconArcheology = L.icon({
//   iconUrl: './img/archeology.svg',
//   iconSize: [40,40],
//   iconAnchor: [40,40],
//   popupAnchor: [-3,-76]
// });

function generateMarkers(arr) {
  let id = 0;
  arr.forEach(function(element) {
    element.id = id;
    const idString = id.toString();
    L.marker(element.latLong, {icon: myDefaultMarker, customId: idString, title:element.placeName}).addTo(mymap)
    .on('click', markerClick)
    .bindPopup(`<b>${element.placeName}</b><br>${element.altPlaceName}`);
    markers[id] = element;
    id+=1;
  });
};
generateMarkers(data);
/****************************
Leaflet - map Click Events
***************************/
function markerClick(e) {
  const customId = this.options.customId;
  const currentClass = markers[customId].udacityForumUserName;
  // $('#cardImage').attr('src', markers[customId].imgUrl);
  // $('#cardTitle').html(markers[customId].placeName);
  // $('#cardText').html(markers[customId].description);
     $('#card').removeClass(defaultClass).addClass(currentClass);
     defaultClass = currentClass;
     $('.card-img').attr('src', markers[customId].imgUrl);
     $('.card-title').html(markers[customId].placeName);
     $('.card-subtitle').html(markers[customId].description);
     $('.card-text').html(markers[customId].cardText);
     let items = $('.card-list-group li');
     for (let i = 0; i < 4; i++) {
      const span = $('<span class="card-list-group-item">Diet:</span>').html(markers[customId].cardList[i][0]);//global?
      $(items[i]).html(markers[customId].cardList[i][1]).prepend(span);

     }
};
//Get Coordinates From Map
//For Now run getLatLong() manually in the console of the browser to use it, latter will add a button
const popup = L.popup();
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
};
function getLatLong() {
  mymap.on('click', onMapClick);
};

$('#xyButton').on('click', function() {
  if (!xyOnClick) {
    xyOnClick = !xyOnClick;
    mymap.on('click', onMapClick);
    $('#xyButton').text('Disable Coordinates onClick').removeClass('btn-success').addClass('btn-warning');
  } else {
    xyOnClick = !xyOnClick;
    mymap.off('click', onMapClick);
    $('#xyButton').text('Get Coordinates from the map').removeClass('btn-warning').addClass('btn-success');

  }
});


