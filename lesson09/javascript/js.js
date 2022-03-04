let d = new Date();
let year = d.getFullYear();

document.getElementById("currentYear").textContent = year;


/************************************************************
 * Responsive hamburger menu
 ***********************************************************/
const hamburger = document.getElementsByClassName("burger")[0];

function toggleNavMenu() {
    hamburger.classList.toggle('hide');
}


/************************************************************
 * Current Date output.
 **********************************************************/
let date = new Date ();
document.getElementById("currentDate").innerHTML = date.toDateString();

/************************************************************
 * Current Date output for header. 
 **********************************************************/
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let day = weekday[d.getDay()];
let mon = month[d.getUTCMonth()];

document.getElementById("weekday").innerHTML = day;
document.getElementById("day").innerHTML = d.getDate();
document.getElementById("month").innerHTML = mon;
document.getElementById("year").innerHTML = d.getFullYear();

