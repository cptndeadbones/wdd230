let d = new Date();
let year = d.getFullYear();

document.getElementById("currentYear").textContent = year;

let updated = document.lastModified;
document.getElementById("lastUpdated").innerHTML= updated;

/************************************************************
 * Responsive hamburger menu
 ***********************************************************/
function toggleMenu() {
    document.getElementById('patty').classList.toggle('hide');
}
/************************************************************
 * Current Date output.
 **********************************************************/
function visit(){
    let d = new Date();
    let miliday = 8640000;
    let visit = localStorage.getItem('initialVisit');
    let obj = new Date(visit);
    if (visit != ''){
        time = ((d - obj) / miliday).toFixed(0);
    } else {
        time = "Looks like this is your first time here! 😎 Thats cool!";
    }

document.getElementById("currentDate").innerHTML = time + " days.";
localStorage.setItem('initialVisit',d);
}

visit();