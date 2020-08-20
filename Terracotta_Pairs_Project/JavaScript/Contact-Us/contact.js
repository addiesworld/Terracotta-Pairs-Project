// $recaptcha = $_POST['g-recaptcha-response'];
// $res = reCaptcha($recaptcha);
// if(!$res['success']){
//   // Error
// }

// function reCaptcha($recaptcha){
//     $secret = "6LdSR8EZAAAAAFdlK_VYIN2Bd_Twb20g7PrYJTd6";
//     $ip = $_SERVER['REMOTE_ADDR'];
  
//     $postvars = array("secret", $secret, "response", $recaptcha, "remoteip", $ip);
//     $url = "https://www.google.com/recaptcha/api/siteverify";
//     $ch = curl_init();
//     curl_setopt($ch, CURLOPT_URL, $url);
//     curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
//     curl_setopt($ch, CURLOPT_TIMEOUT, 10);
//     curl_setopt($ch, CURLOPT_POSTFIELDS, $postvars);
//     $data = curl_exec($ch);
//     curl_close($ch);
  
//     return json_decode($data, true);
//   }

  var mymap = L.map('mapid').setView([51.505, -0.09], 13);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);