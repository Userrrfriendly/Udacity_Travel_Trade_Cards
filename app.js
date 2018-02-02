const mymap = L.map('mapid').setView([39.00496, 22.9248], 6);
const $animalCard = $('#animalCard');
const $defaultCard = $('#defaultCard');
const $listOfContributors = $('#listOfContributors');
const contributors = {};
const arrOfObjectsContributors = []; //arrayOfObjects - currently has no point of existance - probably will be removed
const arrOfContributors = [];
let contDropDownList =[]; // [ ['User Name',badge, 'data-foum-name','data-state']]; //array of arrays
let markers = {};rr
let defaultClass = 'tsigourof_ben6oqe';
let xyOnClick = false;
const $pinButton = $('<button type="button" class="btn btn-outline-dark mb-1 mt-1">xalkidiki den exei</button>'); //currently has no point of existance - probably will be removed
const data = [
  {
    //{
   //To add a new pin on the map (with default-bootstrap-style-card)
   //Uncomment the following lines and change the values
   // userName: 'Your Real Name', //not required but will probably added somewher in the page in a latter update
   // udacityForumUserName: "ThomasZ",
   // placeName: "Serres, Upper Poroia",
   // altPlaceName: "Σέρρες, Άνω Πορόια",
   // description: "this text goes for descritption.",
   // latLong:[43.285892, 22.035583],
   // imgUrl: "./img/placeholder.jpg",
   // country: "Greece"
   //cardList: [["Text from &ltspan&gt Element: ","Text from &ltli&gt element"],["Text from &ltspan&gt Element: ","Text from &ltli&gt Element"],["Text from &ltspan&gt Element: ","Text from &ltli&gt lement"],["Text from &ltspan&gt Element: ","Text from &ltli&gt element"]],
   //animalCard: false
   //},
   
    userName:'Veniamin Tsigourof',
    udacityForumUserName:'tsigourof_ben6oqe',
    placeName:'Thassos, Ancient Quarries',
    altPlaceName:'Αλυκή Θάσσου, Αρχαία Λατομεία',
    description:'Alykes is a peninsula of archaeological inteest where the ancient quarry of marble is situated. The quarry of marble was used from the ancient to byzantine years. Huge marble rocks are discernible under the surface of the sea.',
    latLong:[40.60436,24.74364],
    imgUrl:'./img/thassos_aliki.jpg',
    country:'Greece',
    cardText: 'Additionally, the ancient dorp is of great archaeological interest. On the highest spot, there are the remnants of two palaeo-Christian basilicas of the 5th century that where places that welcomed the worshipers until the pre-Christian years. In the sanctum many sailors had been frequent visitors because they had been travelling to the island in order to transfer marble. The sailors used to engrave on the stepping-stones the names of their beloved ones and theirs, too.',
    cardList: [["Text from &ltspan&gt Element: ","Text from &ltli&gt element"],["Text from &ltspan&gt Element: ","Text from &ltli&gt Element"],["Text from &ltspan&gt Element: ","Text from &ltli&gt lement"],["Text from &ltspan&gt Element: ","Text from &ltli&gt element"]],
    animalCard: false
  },
  {
    userName:'Veniamin Tsigourof',
    udacityForumUserName:'tsigourof_ben6oqe',
    placeName:'Patmos, Xora',
    altPlaceName:'Πάτμος, Χώρα',
    description:'Η Πάτμος είναι ελληνικό νησί του Αιγαίου Πελάγους υπαγόμενο, κατά τους αρχαίους Έλληνες, στις Νότιες Σποράδες, κατά δε τη σύγχρονη πολιτική διαίρεση της χώρας στη Δωδεκάνησο.',
    latLong:[37.30903, 26.54765],
    imgUrl:'http://www.discovergreece.com/~/media/images/highlight-large-images/az/p/patmos/panoramic-view-patmos.ashx?w=820&h=483&crop=1',
    country:'Greece',
    cardText: 'Additionally, the ancient dorp is of great archaeological interest. On the highest spot, there are the remnants of two palaeo-Christian basilicas of the 5th century that where places that welcomed the worshipers until the pre-Christian years. In the sanctum many sailors had been frequent visitors because they had been travelling to the island in order to transfer marble. The sailors used to engrave on the stepping-stones the names of their beloved ones and theirs, too.',
    cardList: [["Text from &ltspan&gt Element: ","Text from &ltli&gt element"],["Text from &ltspan&gt Element: ","Text from &ltli&gt Element"],["Text from &ltspan&gt Element: ","Text from &ltli&gt lement"],["Text from &ltspan&gt Element: ","Text from &ltli&gt element"]],
    animalCard: false
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
    cardList: [["Text from &ltspan&gt Element: ","Text from &ltli&gt element"],["Text from &ltspan&gt Element: ","Text from &ltli&gt Element"],["Text from &ltspan&gt Element: ","Text from &ltli&gt lement"],["Text from &ltspan&gt Element: ","Text from &ltli&gt element"]],
    animalCard: true
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
    cardList: [["Text from &ltspan&gt Element: ","Text from &ltli&gt element"],["Text from &ltspan&gt Element: ","Text from &ltli&gt Element"],["Text from &ltspan&gt Element: ","Text from &ltli&gt lement"],["Text from &ltspan&gt Element: ","Text from &ltli&gt element"]],
    animalCard: false
  },
  {
    userName: 'Thodoris Pliakas',
    udacityForumUserName: "theorios",
    placeName: "Volos",
    altPlaceName: "Βόλος",
    description: "Volos is the newest of the Greek port cities, built at the innermost point of the Pagasetic Gulf and at the foot of Mount Pilio (Pelion, the land of the Centaurs). It includes the municipal units of Volos, Nea Ionia and Iolkos, as well as smaller suburban communities.",
    latLong:[39.3630, 22.9408],
    imgUrl: "https://thumb.ibb.co/bY0ig6/volos.jpg",
    country: "Greece",
    cardText: 'Additionally, the ancient dorp is of great archaeological interest. On the highest spot, there are the remnants of two palaeo-Christian basilicas of the 5th century that where places that welcomed the worshipers until the pre-Christian years. In the sanctum many sailors had been frequent visitors because they had been travelling to the island in order to transfer marble. The sailors used to engrave on the stepping-stones the names of their beloved ones and theirs, too.',
    cardList: [["Text from &ltspan&gt Element: ","Text from &ltli&gt element"],["Text from &ltspan&gt Element: ","Text from &ltli&gt Element"],["Text from &ltspan&gt Element: ","Text from &ltli&gt lement"],["Text from &ltspan&gt Element: ","Text from &ltli&gt element"]],
    animalCard: false
  },
  {
    userName: 'Athanasios Markou',
    udacityForumUserName: "TheLastMoikan",
    placeName: "Mytilene",
    altPlaceName: "Μυτιλήνη",
    description: "Mytilene is a city founded in 11th century BC, also it is the capital and port of island Lesbos. Mytilene is built on the southeast edge of the island and it is the seat of metropolitan bishop of the Orthodox church. The city has a port with ferries that serves some nearby islands and the mainland cities of Pireaus, Athens and Thessaloniki. Besides, there are more than 15 commercial producers that produce ouzo (an alcholic drink)." + '<hr>' + 'The town of Mytilene has a large number of neoclassical buildings, public and private houses. Some of them are the building of the Lesbos Prefecture, the old City Hall, the Experimental Lyceum and various mansions and hotels all over the town. The Baroque church of Saint Therapon dominates at the port with its impressive style.',
    latLong:[39.1041231, 26.5585513],
    imgUrl: "https://preview.ibb.co/mw4AeR/Mytilene.jpg",
    country: "Greece",
    cardText: 'The town of Mytilene has a large number of neoclassical buildings, public and private houses. Some of them are the building of the Lesbos Prefecture, the old City Hall, the Experimental Lyceum and various mansions and hotels all over the town. The Baroque church of Saint Therapon dominates at the port with its impressive style.',
    cardList: [["Text from &ltspan&gt Element: ","Text from &ltli&gt element"],["Text from &ltspan&gt Element: ","Text from &ltli&gt Element"],["Text from &ltspan&gt Element: ","Text from &ltli&gt lement"],["Text from &ltspan&gt Element: ","Text from &ltli&gt element"]],
    animalCard: false
  },
    {
    userName: 'Thomas Zegos',
    udacityForumUserName: "ThomasZ",
    placeName: "Chalkidiki, Afytos",
    altPlaceName: "Χαλκιδική, Άφυτος",
    description: "Afytos is a village in Chalkidiki, northern Greece. It is one of the most beautiful places for vacation. You can take a lot of pictures near the sea, eat good seafood and of course, you can take a dip in the sea. And, if you 're lucky you will see dolphins, too. This place is highly recommended for couples.",
    latLong:[40.098651,23.436987],
    imgUrl: "./img/Afytos.jpg",
    country: "Greece",
    animalCard:false
  },
    {
    userName: 'Christina-Angeliki Antoniou',
    udacityForumUserName: "xrisaant",
    placeName: "Trikala",
    altPlaceName: "Τρίκαλα",
    description: "Trikala (Greek: Τρίκαλα) is a city in northwestern Thessaly, Greece. The region of Trikala has been inhabited since prehistoric times, with the first indications of permanent settlement been uncovered in the cave of Theopetra, and dating back to approx. 49,000 BC!",
    latLong:[39.555634, 21.766896],
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Lithaiosrivertrikala.jpg",
    country: "Greece",
	  cardText: 'The city of Trikala is built on the ancient city of Trikka or Trikke, which was founded around the 3rd millennium BC . The city straddles the Lithaios river,which is a tributary of Pineios and took its name from the nymph Trikke, daughter of Penaeus, or according to others, daughter of the river god Asopus. It was considered to be the birthplace and main residence of the healing god Asclepius and is mentioned in Homers Iliad as having participated in the Trojan War.' + '</br>' + 'Trikala region has a distinctive geology including Meteora, an UNESCO World Heritage Site home to 24 ancient Orthodox Christian monasteries precariously perched on top of a complex network of sandstone boulders,the Forests of Pili,the Pindus mountain villages and the ski resorts of Pertouli.' + '</br>' + 'Nowdays Trikala has the distinction of being the first smart city in Greece, integrating technology-powered solutions into the daily life of the municipality and delivering government services to citizens through e-governance',
    cardList: [["Population: ","81,355"],["Area: ","T607.59 km2"],["Administrative region: ","Thessaly"],["Sights: ","Temble Asklepieion of Trikke, Byzantine Castle build by Justinian,Osman Shah Mosque designed by Mimar Sinan ,Old City of Trikala, Meteora, Lithaios river and the Central Bridge"]],
    animalCard:false //originally true will ask christina about style
  },
   {
     userName: 'Anastasios Agathaggelou', //not required but will probably added somewher in the page in a latter update
     udacityForumUserName: "Tagathag",
     placeName: "Thessaloniki",
     altPlaceName: "Θεσσαλονίκη",
     description: "The city was founded around 315 BC by the King Cassander of Macedon, on or near the site of the ancient town of Therma and 26 other local villages. He named it after his wife Thessalonike, a half-sister of Alexander the Great and princess of Macedon as daughter of Philip II. Under the kingdom of Macedon the city retained its own autonomy and parliament and evolved to become the most important city in Macedon",
     latLong:[40.623156, 22.945599],
     imgUrl: "./img/thessaloniki.jpg",
     country: "Greece",
     animalCard:false
    },
    {
      userName: 'Eleni Nistikaki',
      udacityForumUserName: "elenica99426rl6",
      placeName: "Chania, Crete",
      altPlaceName: "Χανιά Κρήτη",
      description: "<strong>Crete is the place where Zeus, king of gods, was born!</strong><br>Since the ancient times, the city of Chania has faced many conquerors and the influences of many civilizations through time, evident on the city monuments. The beautiful city of Chania managed to preserve its original colors and historical character, despite the fast-growing tourist industry. It is considered as one of the most beautiful cities of Greece and the most picturesque city of Crete. The city of Chania is also characterized by a rich cultural life. A plethora of cultural events are organized every year (exhibitions, festivals, theatrical and musical performances, ect.)",
      latLong:[35.516253, 24.018549],
      imgUrl: "http://www.publicdomainpictures.net/pictures/150000/velka/old-venetian-harbor-1454681052DYt.jpg",
      country: "Greece",
      animalCard:false
    },	
	
  //To add a new pin on the map (with default-bootstrap-style-card) 
  //Uncomment the following lines and change the values
  // userName: 'Your Real Name', //not required but will probably added somewher in the page in a latter update
  // udacityForumUserName: "ThomasZ",
  // placeName: "Serres, Upper Poroia",
  // altPlaceName: "Σέρρες, Άνω Πορόια",
  // description: "this text goes for descritption.",
  // latLong:[43.285892, 22.035583],
  // imgUrl: "./img/plaaceholder.jpg",
  // country: "Greece"
];

/***************************
*    Show Contributors     *
***************************/
// function addContributor() {
//     for( i=0; i < data.length; i++) {
//             document.getElementsByClassName('contributor')[i].innerHTML = data[i].userName;
//     }
// }
// addContributor();

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
  if (!markers[customId].animalCard) {
    $defaultCard.show();
    $animalCard.hide();
    $('#cardImage').attr('src', markers[customId].imgUrl);
    $('#cardTitle').html(markers[customId].placeName);
    $('#cardText').html(markers[customId].description);
  } else {
    $defaultCard.hide();
    $animalCard.show();
    //
    const currentClass = markers[customId].udacityForumUserName;
    $animalCard.removeClass(defaultClass).addClass(currentClass);
    defaultClass = currentClass;
    $('.card-img').attr('src', markers[customId].imgUrl);
    $('.card-title').html(markers[customId].placeName);
    $('.card-subtitle').html(markers[customId].description);
    $('.card-text').html(markers[customId].cardText);
    let listItems = $('.card-list-group li');
    for (let i = 0; i < 4; i++) {
      const span = $('<span class="card-list-group-item">Diet:</span>').html(markers[customId].cardList[i][0]);//global?
      $(listItems[i]).html(markers[customId].cardList[i][1]).prepend(span);
    }
  }
};
//Get Coordinates From Map
const popup = L.popup();
function onMapClick(e) {
    popup
      .setLatLng(e.latlng)
      .setContent("You clicked the map at " + e.latlng.toString())
      .openOn(mymap);
};

// Enable / Disable Coordinates on click
$('#xyButton').on('click', function() {
  if (!xyOnClick) {
    xyOnClick = !xyOnClick;
    mymap.on('click', onMapClick);
    $('#xyButton').text('Disable Coordinates on click').toggleClass('active'); //.removeClass('btn-success').addClass('btn-warning');
  } else {
    xyOnClick = !xyOnClick;
    mymap.off('click', onMapClick);
    $('#xyButton').text('Get Coordinates from the map').toggleClass('active'); //.removeClass('btn-warning').addClass('btn-success');
  }
});
//Toggle List of Contributors
$('#toggleContributorsBtn').on('click', function() {
  $listOfContributors.slideToggle(500,"swing");
});
//populate list of contributors
function getContributors() {
  Object.keys(markers).forEach(function(key) {
    //Loops through the object. snippet from https://stackoverflow.com/questions/684672/how-do-i-loop-through-or-enumerate-a-javascript-object
    if (contributors[markers[key].udacityForumUserName] == null) {
        // checks if undefined or null. code snippet from https://stackoverflow.com/questions/2647867/how-to-determine-if-variable-is-undefined-or-null
        contributors[markers[key].udacityForumUserName] = [key];
    } else {
        contributors[markers[key].udacityForumUserName].push(key);
    }
  });
};
getContributors();

function  contrToArray() {
  Object.keys(contributors).forEach(function(key) {
    let temp = {};
    temp[key] = contributors[key];
    arrOfObjectsContributors.push(temp);
    arrOfContributors.push(key);
  });
};
contrToArray();

$('.contributor').on('click', function(){
  switch ($(this).attr('data-state')) {
    case 'idle':
      let arrayOfPins = contributors[$(this).attr('data-forum-name')];
      $('<div class="pins"></div>').clone().insertAfter(this);
      for (let i = 0; i< arrayOfPins.length; i++) {
        let placeName = markers[contributors[$(this).attr('data-forum-name')][i]].placeName;
        let lat = markers[contributors[$(this).attr('data-forum-name')][i]].latLong[0];
        let long = markers[contributors[$(this).attr('data-forum-name')][i]].latLong[1];
        tempButton = $('<button type="button" class="btn btn-outline-dark mb-1 mt-1">' + placeName + '</span></button>');
        tempButton.attr('data-lat', lat).attr('data-long', long);
        $(this).next('div.pins').append(tempButton);
      };
      $(this).attr('data-state','expanded'); 
      break;
    case 'expanded':
      $(this).next('div.pins').toggleClass('hidden');
      $(this).attr('data-state','collapsed'); 
      break;
    case 'collapsed':
      $(this).next('div.pins').toggleClass('hidden');
      $(this).attr('data-state','expanded'); 
      break;
    };
});

function showContributors() { 
  //Object.keys(obj).length //number of keys( contributors)  
  for (let i=0; i< arrOfContributors.length ; i++) {
    //arrOfContributors[i] //forumname
    let tempElement = [
      markers[contributors[arrOfContributors[i]][0]].userName, //User Name
      '<span class="badge badge-light ml-1">' + contributors[arrOfContributors[i]].length + '</span>',//badge
      arrOfContributors[i], //data-forum-name
      'idle' //data-state
    ];
    contDropDownList.push(tempElement);
    if (i<5) {
      document.getElementsByClassName('contributor')[i].innerHTML = contDropDownList[i][0];
      $($('.contributor')[i])
        .attr('data-forum-name', arrOfContributors[i])
        .attr('data-state','idle')
        .append($(contDropDownList[i][1]));
    }
  }
};
showContributors();

//Attach the click on body because the button.btn-outline-dark elements are added dynamically 
$('body').on('click','button.btn-outline-dark', function() {
  const lat = parseFloat($(this).attr('data-lat'));
  const long = parseFloat($(this).attr('data-long'));
  mymap.setView([lat,long],11);
})

$('button.down').on('click', function() {
  const lastIndex = $($('.contributor')[4]).attr('data-forum-name'); //last index forumID
  const firstIndex = $($('.contributor')[0]).attr('data-forum-name'); //first index forumID
  if (arrOfContributors.indexOf(lastIndex) < arrOfContributors.length-1) {
    const $firstElement = $($('.contributor')[0]);
    const $lastElement = $($('.contributor')[4]);
    $('div.pins').remove();
    for (let i = 0; i<5; i++) {
      $($('.contributor')[i]).attr('data-state','idle');
    }
    $firstElement
    .html(contDropDownList[arrOfContributors.indexOf(lastIndex) + 1][0])
    .attr('data-forum-name', arrOfContributors[arrOfContributors.indexOf(lastIndex) + 1 ])
    .attr('data-state','idle')
    .append($(contDropDownList[arrOfContributors.indexOf(lastIndex) + 1][1]));
    $($lastElement).after($firstElement);
  }
}
);

$('button.up').on('click', function() {
  const lastIndex = $($('.contributor')[4]).attr('data-forum-name'); //last index forumID
  const firstIndex = $($('.contributor')[0]).attr('data-forum-name'); //first index forumID
  if (arrOfContributors.indexOf(firstIndex) -1 >= 0) {
    const $firstElement = $($('.contributor')[0]);
    const $lastElement = $($('.contributor')[4]);
    $('div.pins').remove();
    for (let i = 0; i<5; i++) {
      $($('.contributor')[i]).attr('data-state','idle');
    }
    $lastElement
    .html(contDropDownList[arrOfContributors.indexOf(firstIndex) - 1][0])
    .attr('data-forum-name', arrOfContributors[arrOfContributors.indexOf(firstIndex) -1 ])
    .attr('data-state','idle')
    .append($(contDropDownList[arrOfContributors.indexOf(firstIndex) - 1][1]));
    $($firstElement).before($lastElement);
  }
}
);

/***************************
 KNOWN BUGS && IMPROVEMENTS
 ***************************/
//GET GOORDINATES BUTTON BECOMES BLUE ON CLICK
//travelling card = postcard 
//Maybe add a feaure so that a user can place two images in a single pin...
//...by clicking on the card image the next one will toggle
//list of contributors need to populate it
  
