document.getElementById("page-title").style.fontSize = "30px";
function set(val){
    var str = document.getElementById(val).innerHTML;
    document.getElementById('location-button').innerHTML = str;
    document.getElementById('location-button').value = str;
    document.getElementById('location-button').name = str;
}
var district = [  
    "Ariyalur",
    "Chennai",
    "Coimbatore",
    "Cuddalore",
    "Dharmapuri",
    "Dindigul",
    "Erode",
    "Kanchipuram",
    "Kanyakumari",
    "Karur",
    "Krishnagiri",
    "Madurai",
    "Nagapattinam",
    "Namakkal",
    "Nilgiris",
    "Perambalur",
    "Pudukkottai",
    "Ramanathapuram",
    "Salem",
    "Sivaganga",
    "Thanjavur",
    "Theni",
    "Thoothukudi (Tuticorin)",
    "Tiruchirappalli",
    "Tirunelveli",
    "Tiruppur",
    "Tiruvallur",
    "Tiruvannamalai",
    "Tiruvarur",
    "Vellore",
    "Viluppuram",
    "Virudhunagar"
 ];
 
for(i=0;i<district.length;i++){
    document.getElementById('location-result').innerHTML += '<li><a onclick="set(this.id)" class="dropdown-item" href="#" id="dis'+i+'">'+district[i]+'</a></li>';

}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 85 || document.documentElement.scrollTop > 85) {
    document.getElementById("headers").style.paddingTop = "0.3rem";
    document.getElementById("headers").style.paddingBottom = "0.3rem";
    document.getElementById("page-title").style.fontSize = "25px";
  } else {
    document.getElementById("headers").style.paddingTop = "15px";
    document.getElementById("headers").style.paddingBottom = "15px";
    document.getElementById("page-title").style.fontSize = "28px";
  }
}











