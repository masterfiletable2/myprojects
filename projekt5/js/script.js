   
let coords
let map
let pointer;
let pin = 'https://placeimg.com/40/40/animals';

//inicjalizacja oraz ustawienia parametrow dla mapy, pointera itd
function initMap() {
    coords = { lat: 49.989093, lng: 20.0063032 };  
    map = new google.maps.Map(document.querySelector('#map'), {
        center: coords,
        //disableDefaultUI: false
        zoom: 10,
        disableDefaultUI: true
    });
    
    pointer = new google.maps.Marker({
        position: coords,
        map: map,
        icon: pin,
    });
    getLocalization();
    startWebSocket();
    addKeyboardEvents();
}

let id
let WS;



//funkcja wywolujaca event poruszania sie
function addKeyboardEvents() {
    window.addEventListener('keydown', movePointer);
}


//funkcja odpowiadajaca za poruszanie pointerem za pomoca strzalek
function movePointer(e) {
    let lat = pointer.getPosition().lat();
    let lng = pointer.getPosition().lng();




//opcje do switch
    const keys={
        1 :"ArrowUp",
        2:"ArrowDown",
        3:"ArrowLeft",
        4:"ArrowRight",
    }
   

    switch (e.code) {
        case keys[1]:
            lat = lat + 0.1;
            break;
        case keys[2]:
            lat = lat -  0.1;
            break;
        case keys[3]:
            lng = lng - 0.1;
            break;
        case keys[4]:
            lng = lng + 0.1;
            break;
    }
   

    let position = {
        lat,
        lng
    };

    let wsData = {
        lat: lat,
        lng: lng,
        id: id
    };


    pointer.setPosition(position);
    //informajce o wspolrzednych i id
    WS.send(JSON.stringify(wsData));
}

//konfiguracja websocket
function startWebSocket() {
   //moj let url = 'ws://91.101.6.174:8010'
   let url = 'ws://91.121.6.192:8010'
    WS = new WebSocket(url)
    WS.addEventListener('open', OpenWS)
    WS.addEventListener('message', noticeWS)
}

function OpenWS(data) {
    console.log(data);
}

let players = {};



function noticeWS(e) {
    let data = JSON.parse(e.data)

    if (!players['user' + data.id]) {
        players['user' + data.id] = new google.maps.Marker({
           
            map: map,
            icon: pin,         
            position: { lat: data.lat, lng: data.lng }
        });
    } else {
        players['user' + data.id].setPosition({
            lat: data.lat,
            lng: data.lng
        });
    }
    console.log(data);
}




function getLocalization() {
    navigator.geolocation.getCurrentPosition(accepted, canceled);

}


//Walidacja akceptacji lokalizacji

function accepted(data) {
    let coords = {
        lat: data.coords.latitude,
        lng: data.coords.longitude
    };
    map.setCenter(coords);
    pointer.setPosition(coords);
    alert('Super! Użyj strzałek do porusznia się.');
}

function canceled(err) {
  var ask = confirm('Twoja lokalizacja polepszy dokładność w działaniu skryptu, może chcesz jednak ponowić próbę?');
  if (ask == true){
    location.reload();
  }

 
}


