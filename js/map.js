$(document).ready(function(){

  //returned from the api
  let marketId = [];
  let allLatLng = [];
  let allMarkers = [];
  let marketName = [];
  let infoWindow = null;
  let pos;
  let userCords;
  let tempMarkerHolder = [];

  // start geolocation

  if(navigator.geolocation){

    function error(err){
      console.warn('Error(' + err.code + '): ' + err.message);
    }
    function success(pos){
      userCords = pos.coords;
    }

    navigator.geolocaiton.getCurrentPosition(success, error);
    //console.log(pos.latitude + " " + pos.longitude)
  } else {
    alert('Geolocation is not supported in your browser');
  }
  //end geolocation

//map options
  let mapOptions = {
    zoom: 5,
    center: new google.maps.LatLng(37.09024, -100.712891),
    panControl: false,
    panControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_LEFT
    },
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.LARGE,
      position: google.maps.ControlMosition.RIGHT_CANTER
    },
    scaleControl: false
  };

  

});
