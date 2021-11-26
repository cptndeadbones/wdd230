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