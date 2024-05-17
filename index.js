

let b = "Hallo das hier ist eine Variabel"
let username;
let ergebnis;

ergebnis = Number(ergebnis);
// Nutzername eingeben
document.getElementById("meinBestätigen").onclick = function(){
    username = document.getElementById("meinText").value;
    console.log(username);
    document.getElementById("Nutzername").textContent = `Hallo ${username}`
    
}


//Radius berechnen
document.getElementById("best").onclick = function(){
    var radius = parseFloat(document.getElementById("radius").value);
    if (!isNaN(radius)) {
        ergebnis = document.getElementById("radius").value*2*3.14
        document.getElementById("radius").value = "";
        document.getElementById("erg").textContent = `Ergebnis: Der Umfang beträgt ${ergebnis} cm `
        
    }
   else 
   document.getElementById("erg").textContent = `Du musst eine Zahl eingeben `

}
 // Buttons berechnen
 const decreaseBtn= document.getElementById("-");
 const resetBtn= document.getElementById("res");
 const increaseBtn= document.getElementById("+");
 const zählerLbl = document.getElementById("zähler");
let count = 0;
let reset = 0;
increaseBtn.onclick = function(){
    count++;
    zählerLbl.textContent = count;
}

resetBtn.onclick = function(){
zählerLbl.textContent= reset;
document.getElementById("button3").style.backgroundColor = "rgb(156, 121, 121)";
document.body.style.background = "linear-gradient(to right, #5450c4, #acacd0)";
}
decreaseBtn.onclick = function(){
    count--;
    zählerLbl.textContent = count;
}
function updateClock() {
    const now = new Date();
    let hours= now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,0); 
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("cock").textContent= timeString;
    
}
updateClock();
setInterval(updateClock, 1000);

//Button 




function appendToDisplay(intput) {
    document.getElementById("anzeige").value += intput;
}
function clearDisplay() {
    document.getElementById("anzeige").value = "";
}
function calculate() {
    document.getElementById("anzeige").value = eval(document.getElementById("anzeige").value);

    
}
//Klick mich button funktionalität
function klickme(){
    var klick= document.getElementById("klickme");
    var zahl= document.getElementById("countzahl");
    var zähler = 0;
    
    klick.addEventListener("click", function() {
        zähler++;
        zahl.textContent = zähler;
    });
}
klickme();

function changecolor() {
    var button = document.getElementById("hintergrund");

    button.addEventListener("click", function() {
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "green";
    });
}

document.getElementById("button3").onclick= function(){
    document.getElementById("button3").style.backgroundColor = "#ff0000";
    
}

document.getElementById("button1").onclick= function(){
    
}

