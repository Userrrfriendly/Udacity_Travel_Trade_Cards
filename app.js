const mymap = L.map('mapid').setView([39.0, 22.9], 4);
const $styling = $('#styling');
const $defaultCard = $('#defaultCard');
const $listOfContributors = $('#listOfContributors');
const contributors = {};
const arrOfObjectsContributors = []; //arrayOfObjects - currently has no point of existance - probably will be removed
const arrOfContributors = [];
let contDropDownList =[]; // [ ['User Name',badge, 'data-foum-name','data-state']]; //array of arrays
let markers = {};
let defaultClass = 'default';
let xyOnClick = false;
const $pinButton = $('<button type="button" class="btn btn-outline-dark mb-1 mt-1">xalkidiki den exei</button>'); //currently has no point of existance - probably will be removed
const data = [
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
   // styling: false
   //},
   {
    userName: 'Ania',  
    udacityForumUserName: "amierzwinska",
    placeName: "Nowy Świat, Warsaw",
    altPlaceName: "Warszawa",
    latLong:[52.234014, 21.019072],
    description: "Nowy Świat, translating to New World, is a beautiful street in the heart of Polish capital Warsaw. Visit the place in summer to enjoy a walk along it without car traffic as you head for the Old Town or lively the party scene alongside the Vistula River.",
    imgUrl: "https://static.pexels.com/photos/772839/pexels-photo-772839.jpeg",
    country: "Poland",
    styling: false
  },
  {
    userName:'Veniamin Tsigourof',
    udacityForumUserName:'tsigourof_ben6oqe',
    placeName:'Thassos, Ancient Quarries',
    altPlaceName:'Αλυκή Θάσου, Αρχαία Λατομεία',
    description:'Alykes is a peninsula of archaeological interest where the ancient quarry of marble is situated. The quarry of marble was used from the ancient to byzantine years. If you happen to visit Thassos it is hard to miss Alykes, since right next to the archeological site rests one of the most popular beach of the island.',
    latLong:[40.60436,24.74364],
    imgUrl:'./img/thassos_aliki.jpg',
    country:'Greece',
    styling: false
  },
  {
    userName:'Veniamin Tsigourof',
    udacityForumUserName:'tsigourof_ben6oqe',
    placeName:'Patmos, Chora',
    altPlaceName:'Πάτμος, Χώρα',
    description:"Patmos is a small Greek island in the Aegean Sea, most famous for being the location of both the vision of and the writing of the Christian Bible's Book of Revelation.    On the highest point of the island is located the picturesque traditional settlement Chora and the Monastery of Saint John the Theologian which along with the Cave of the Apocalypse were declared World Heritage Sites by UNESCO in 1999. If you choose Patmos as your travel destination you will find crystal clear beaches, beautiful landscape, dozens of monasteries, and a sense of tranquility that surrounds the island like a magical veil.",
    latLong:[37.30903, 26.54765],
    imgUrl:'./img/patmos.jpg',
    country:'Greece',
    styling: false
  },
  {
    userName:'Veniamin Tsigourof',
    udacityForumUserName:'tsigourof_ben6oqe',
    placeName:'Mount Beshtau',
    altPlaceName:'Бештау',
    description:'Standing on top of the Beshtau Mountain gazing at the world from 1400 meters. Clouds above and clouds below, makes you feel like an Olympian God who lost his way.',
    latLong:[44.09749, 43.02235],
    imgUrl:'./img/beshtau.jpg',
    country:'Russia',
    styling: false
  },
  {
    userName: 'Thomas Zegos',
    udacityForumUserName: "ThomasZ",
    placeName: "Serres, Upper Poroia",
    altPlaceName: "Σέρρες, Άνω Πορόια",
    description: "Upper Poroia is a large settlement of Serres in Macedonia. It is built on the foot of Mount Belles northwest of Lake Kerkini. It 's an alternative and homely place for relaxion. Horseback riding and hiking are remarkable entertaining activities you couldn't lose.",
    latLong:[41.285892, 23.035583],
    imgUrl: "./img/Ano-Poroia.JPG", //"./img/Ano-Poroia.jpg", https://image.ibb.co/m1PiUR/Ano_Poroia.jpg
    country: "Greece",
    styling: false,
    custom:false
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
    styling: false
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
    styling: false
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
    cardText: '',
    styling: true,
    customCard:false,
    cardList: [["",""],["",""],["",""],["",""]]
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
    styling: true,
    customCard:true
  },
   {
     userName: 'Anastasios Agathaggelou',
     udacityForumUserName: "Tagathag",
     placeName: "Thessaloniki",
     altPlaceName: "Θεσσαλονίκη",
     description: "The city was founded around 315 BC by the King Cassander of Macedon, on or near the site of the ancient town of Therma and 26 other local villages. He named it after his wife Thessalonike, a half-sister of Alexander the Great and princess of Macedon as daughter of Philip II. Under the kingdom of Macedon the city retained its own autonomy and parliament and evolved to become the most important city in Macedon",
     latLong:[40.623156, 22.945599],
     imgUrl: "./img/thessaloniki.jpg",
     country: "Greece",
     styling: true,
     customCard:true
    },
    {
      userName: 'Eleni Nistikaki',
      udacityForumUserName: "elenica99426rl6",
      placeName: "Chania, Crete",
      altPlaceName: "Χανιά Κρήτη",
      description: "<strong>Crete is the place where Zeus, king of gods, was born!</strong><br>Since the ancient times, the city of Chania has faced many conquerors and the influences of many civilizations through time, evident on the city monuments. The beautiful city of Chania managed to preserve its original colors and historical character, despite the fast-growing tourist industry. It is considered as one of the most beautiful cities of Greece and the most picturesque city of Crete. The city of Chania is also characterized by a rich cultural life. A plethora of cultural events are organized every year (exhibitions, festivals, theatrical and musical performances, ect.)",
      latLong:[35.516253, 24.018549],
      imgUrl: "./img/old-venetian-harbor-1454681052DYt.jpg",
      country: "Greece",
      styling: false
    },
    {
      userName:'Foteini Kollia',
      udacityForumUserName:'foteinikolliagvt',
      placeName:'Delos',
      altPlaceName:'Δήλος',
      description:'Just a stone\'s throw from cosmopolitan Mykonos, Delos is the holy island of ancient Greece, a place imposing, bare of vegetation but exceptionally brilliant under the sunlight. It is the birthplace of Apollo and Artemis, according to mythology.',
      latLong:[37.395603, 25.270252],
      imgUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Temple_of_Isis%2C_Delos_01.jpg/1024px-Temple_of_Isis%2C_Delos_01.jpg',
      country:'Greece',
      styling: false
    },
    {
      userName: 'Konstantinos Tsinganos',
      udacityForumUserName:'kostastsig.94',
      placeName:'Patras',
      altPlaceName:'Πάτρα',
      description:'Patras is Greece’s third-largest city and the regional capital of Western Greece. Dubbed as Greece’s Gate to the West, Patras is a commercial hub, while its busy port is a nodal point for trade and communication with Italy and the rest of Western Europe. The city has two public universities and one Technological Institute, hosting a large student population and rendering Patras an important scientific centre with a field of excellence in technological education. The Rio-Antirio bridge connects Patras’ easternmost suburb of Rio to the town of Antirrio, connecting the Peloponnese peninsula with mainland Greece. Every year, in February, the city hosts one of Europe’s largest carnivals: notable features of the Patras Carnival include its mammoth satirical floats and balls and parades, enjoyed by hundreds of thousands of visitors in a Mediterranean climate. Patras is also famous for supporting an indigenous cultural scene active mainly in the performing arts and modern urban literature. It was European Capital of Culture in 2006.',
      latLong:[38.25, 21.733333],
      imgUrl:'http://www.discovergreece.com/~/media/images/highlight-large-images/az/p/patra/view-of-centre-of-patras-castle-hill.ashx?w=820&h=483&crop=1',
      country:'Greece',
      styling: false
    },

    /************************
    *****ANIMAL CARD TEMPLATES*******
    ************************/
    {
      userName: "Katerina Makri",
      udacityForumUserName: "kathrin023",
      placeName: "Syros, Cyclades",
      altPlaceName: "Σύρος, Κυκλάδες",
      description: "",
      latLong:[37.4499982, 24.8999964],
      imgUrl: "./img/syros.jpg",
      country: "Greece",
      styling: true,
      customCard:false,
      cardText: 'Ermoúpoli (means “the city of Hermes") is the island’s capital town and has been the first important trade and industrial centre of the country in the 19th century. Evidence of this glorious past can be seen on public buildings (the City Hall, the Customs Office, “Apollo” theatre), on the neoclassical houses and at the beautiful squares. Syros is considered a favorable pole of attraction throughout the year as each season dresses the already breathtaking scenery with its own colors and aromas, with its own beauties and contrasts always offering a special and unforgettable experience for all visitors.',
      cardList: [["Region: ","South Aegean"],["Capital: ","Ermoupoli"],["Area: ","101.9 km2"],["Population: "," 21,507 people"]]
    },
    {
      //rodes
      userName: "Virginia Sverkiou",
      udacityForumUserName: "virginiasverkiouwfi",
      placeName: "Rhodes",
      altPlaceName: "Ρόδος",
      description: '<div class="note1 text-center">The 4th largest island of Greece!</div>' + '<div class="note2 text-center">Rhodes is a "must" if you want to visit Greece! It has a lot of different destinations that include sightseeing, historical statues and more..! The most popular places to visit are:</div>',
      latLong:[36.077285, 28.072477],
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Sunrise_at_the_Island_of_Rhodes%2C_Greece.jpg",
      country: "Greece",
      styling: true,
      customCard:false,
      cardText: '<em>One extra tip:</em> You can take the boat and visit the beautiful island Symi, to discover its wonderful beaches!',
      cardList: [["x: ","The Palace of the Grand Master in the Old Town"],["y: ","Lindos"],["z: ","Ialissós"],["x: ","The area of Petaloúdes"]]
    },
    {//mesolongi
      userName: "George Alexandris",
      udacityForumUserName: "gfa61ga6dz6", //gfa61.ga6dz6
      placeName: "Messolongi, Western Greece",
      altPlaceName: "Μεσολόγγι, Δυτική Ελλάδα",
      description: '<strong>Τhe holy city of Greece</strong> (244 km from Athens). The heroic exodus of the free besieged was a crucial point in modern Greek history and a source of inspiration for poets such as Solomos and Lord Byron.',
      latLong:[38.368674, 21.430415],
      imgUrl: "https://gfa61-ga.github.io/Google-Scholarship-Front-End-Web-Dev/messolongi.jpg",
      country: "Greece",
      styling: true,
      customCard:false,
      cardText: "Every year, during the day of Lazarus and Palm Sunday the Exodus is remembered. Messologgi is a nice, quiet town with a lot of traditional houses. The architecture is notable. A visit to this city will remind you of past times.<br>On the mountain slopes above Mesolongi is the Monastery of Saint Symeon with historical importance. The Garden of Heroes in the centre of the town is a nice place to walk around, hosting monuments of heroes from the Greek Revolution of 1821. In short drive distance from Mesolongi are nice villages and beaches to explore.<br>Even the finest photographers have trouble capturing the light that turns the vast Messolongi lagoon golden at sunset.The lagoon is a fisherman’s tale of cinematic proportions, made up of ‘corrals’, or special fishing enclosures, weirs that fiddle a little with the water flow, fishing huts on stilts, flat-bottomed boats and the islets of Kleisova and Agios Sostis; sights that will have you clicking your camera nonstop.",
      cardList: [["Population: ","14.386"],["Sights: ","Messolongi lagoon"],["Historical Point: ","Garden of Heroes"],["Popular Beaches:"," Tourlida, Louros"]]
    },
    {
      userName: "Daniel Mantzakos",
      udacityForumUserName: "danielmantzakos", //daniel.mantzakos
      placeName: "Parthenon, Athens",
      altPlaceName: "Παρθενώνας",
      description: "The Parthenon is considered as one of the world's greatest cultural monuments.",
      latLong:[37.971542, 23.726587],
      imgUrl: "./img/parthenon.jpg",
      country: "Greece",
      styling: true,
      customCard:false,
      cardText: 'The Parthenon is a former temple, on the Athenian Acropolis, Greece, dedicated to the goddess Athena, whom the people of Athens considered their patron. To the Athenians who built it, the Parthenon and other Periclean monuments of the Acropolis, were seen fundamentally as a celebration of Hellenic victory over the Persian invaders and as a thanksgiving to the gods for that victory. Today, Parthenon attracts millions of tourists every year.',
      cardList: [["Type: ","Temple"],["Architectural style: ","Classical"],["Construction started: ","447 BC"],["Completed: ","432 BC"]]
    },
    {
      //sparta
      userName: "Daniel Mantzakos",
      udacityForumUserName: "danielmantzakos", //daniel.mantzakos
      placeName: "Sparta",
      altPlaceName: "Σπάρτη",
      description: "Around 650 BC, Sparta rose to become the dominant military land-power in ancient Greece.",
      latLong:[37.0735338,22.4121275],
      imgUrl: "./img/sparta.jpg",
      country: "Greece",
      styling: true,
      customCard:false,
      cardText: 'Sparta was a prominent city-state in ancient Greece. In antiquity the city-state was known as Lacedaemon, while the name Sparta referred to its main settlement on the banks of the Eurotas River in Laconia, in south-eastern Peloponnese. Given its military pre-eminence, Sparta was recognized as the overall leader of the combined Greek forces during the Greco-Persian Wars. Between 431 and 404 BC, Sparta was the principal enemy of Athens during the Peloponnesian War, from which it emerged victorious, though at a great cost of lives lost.',
      cardList: [["Foundation: ","900s BC"],["Population: ","16,239"],["Battle of Thermopylae: ","480 BC"],["Peloponnesian War:"," 431–404 BC"]]
    },
    /************************
    *****CUSTOM STYLES*******
    ************************/
    {
      userName: 'Tsarvouli Konstantina',
      udacityForumUserName: "ntina_t",
      placeName: "Kavala",
      altPlaceName: "Καβάλα",
      latLong:[40.934914, 24.415186],
      country: "Greece",
      styling: true,
      customCard:true
    },
    {
      userName: 'Tsarvouli Konstantina',
      udacityForumUserName: "ntina_t2",
      placeName: "Samothrace",
      altPlaceName: "Σαμοθράκη",
      latLong:[40.45316, 25.584357],
      country: "Greece",
      styling: true,
      customCard:true
    },
    {
      userName: 'Evi Giannakou',
      udacityForumUserName: "evigiannakou",
      placeName: "Amorgos",
      altPlaceName: "Αμοργός",
      latLong:[36.792607, 25.765614],
      country: "Greece",
      styling: true,
      customCard:true
    },
    {
      userName: 'Evi Giannakou',
      udacityForumUserName: "evigiannakou2",
      placeName: "Amorgos",
      altPlaceName: "Αμοργός",
      latLong:[36.903418, 25.980246],
      country: "Greece",
      styling: true,
      customCard:true
    },
    {
      userName: 'Evi Giannakou',
      udacityForumUserName: "evigiannakou3",
      placeName: "Corfu",
      altPlaceName: "Κέρκυρα",
      latLong:[39.624158, 19.904837],
      country: "Greece",
      styling: true,
      customCard:true
    },
    {
      userName: 'Evi Giannakou',
      udacityForumUserName: "evigiannakou4",
      placeName: "Corfu",
      altPlaceName: "Κέρκυρα",
      latLong:[39.754601, 19.694385],
      country: "Greece",
      styling: true,
      customCard:true
    }
    /************************
    ***end of CUSTOM STYLES**
    ************************/
];

/*****************foteini  we can add our skin codes here*******************/
const body=$('body');
const header=$('.header');
const dropdown_menu = $('.dropdown-menu');
dropdown_menu.on('click','a',function(event){
  event.preventDefault();
  let x=$(event.target).text();
  if(x==="summer"){  //to x= θα είναι το όνομα του skin
    body.removeClass();  //βγαζει προηγουμενο στυλ
    body.addClass("summer");//εδώ θα είναι το όνομα του δικου μας class
    header.css({"background-color": "transparent"});//εδώ βγάζει το background-color απο το header
  } else if(x===" skin's name"){
    body.removeClass();
    body.addClass("class name");
    header.css({"background-color": "transparent"});
    }
    else if(x==="winter"){
      body.removeClass();
      body.addClass("winter");
      header.css({"background-color": "transparent"});
      } else {
        header.css({"background-color": "#3f7aa2"})
        body.removeClass();
      }
});
//*************telos allaghs foteini***************************************************
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
  if (!markers[customId].styling) {
    $('.customcard').hide();
    $styling.hide();
    $defaultCard.show();
    $('#cardImage').attr('src', markers[customId].imgUrl);
    $('#cardTitle').html(markers[customId].placeName);
    $('#cardText').html(markers[customId].description);
  } else {
    !markers[customId].customCard ? defaultAnimalCard() : customCard();
    function defaultAnimalCard() {
      $defaultCard.hide();
      $('.customcard').hide();
      $styling.show();
      const currentClass = markers[customId].udacityForumUserName;
      $styling.removeClass(defaultClass).addClass(currentClass);
      defaultClass = currentClass;
      $('#styling .card-img').attr('src', markers[customId].imgUrl);
      $('.card-title').html(markers[customId].placeName);
      $('.card-subtitle').html(markers[customId].description);
      $('.card-text').html(markers[customId].cardText);
      let listItems = $('.card-list-group li');
      for (let i = 0; i < 4; i++) {
        const span = $('<span class="card-list-group-item"></span>').html(markers[customId].cardList[i][0]);//global?
        $(listItems[i]).html(markers[customId].cardList[i][1]).prepend(span);
      }
    }
    function customCard() {
      $('.customcard').hide();
      $defaultCard.hide();
      $styling.hide();
      const cardName ='.' + (markers[customId].udacityForumUserName).toString();
      $(cardName).show();
    }
    //
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
    $('#xyButton').text('Disable Coordinates on click'); //.removeClass('btn-success').addClass('btn-warning');
  } else {
    xyOnClick = !xyOnClick;
    mymap.off('click', onMapClick);
    $('#xyButton').text('Get Coordinates from the map'); //.removeClass('btn-warning').addClass('btn-success');
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
//Maybe add a feaure so that a user can place two images in a single pin...
//...by clicking on the card image the next one will toggle
//list on contributors: apart from zooming in to the pin it should also oopen the card
//on small screens by clicking on the pin it should 'scroll' the page to the card
