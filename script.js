function login(){
alert("Successful Login")
window.location="home.html"
}

/* WEATHER */

function showWeather(){

let state=document.getElementById("state").value
let district=document.getElementById("district").value

if(state=="" || district==""){
alert("Please select state and district")
return
}

document.getElementById("weatherResult").innerHTML=
"<b>"+district+", "+state+"</b><br><br>"+
"Temperature : 29°C ☀<br>"+
"Humidity : 65%<br>"+
"Wind : 10 km/h"
}

/* CROP */

function suggestCrop(){

let season=document.getElementById("season").value
let result=""

if(season=="Summer"){
result="Rice, Maize, Cotton"
}
else if(season=="Rainy"){
result="Paddy, Sugarcane, Groundnut"
}
else if(season=="Winter"){
result="Wheat, Tea, Mustard"
}

document.getElementById("cropResult").innerHTML="Suggested Crops: "+result
}

/* EQUIPMENT */

function equipmentSuggest(){

let crop=document.getElementById("crop").value
let type=document.getElementById("equip").value

document.getElementById("equipResult").innerHTML=
"Recommended Equipment for "+crop+" : "+type
}