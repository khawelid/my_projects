var countDownDate = new Date("may 6, 2021 00:00:00").getTime();

var countdownfunction = setInterval(function() {

var now = new Date().getTime();

var distance =   countDownDate - now ;

var year = Math.floor( distance / ( 1000 * 60 * 60 * 24 * 365));

var days = Math.floor( distance / ( 1000 * 60 * 60 * 24));

var hours = Math.floor((distance % (1000* 60 * 60 * 24)) / (1000 * 60 * 60));

var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

var seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("s").innerHTML = seconds + "<p>SECONDS</p>";
  
document.getElementById("m").innerHTML = minutes + "<p>MINUTES</p>";
  
document.getElementById("h").innerHTML = hours + "<p>HOURS</p>";
  
document.getElementById("d").innerHTML = days + "<p>DAYS</p>";

document.getElementById("r").innerHTML = year + "<p>Years</p>";


});