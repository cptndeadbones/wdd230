const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".numOfVisits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);


const time = Number(window.localStorage.getItem("last-visit"));
// show todays date.
const gettime = Date.now();
todayDisplay.textContent = ((gettime - time) / 86400000).toFixed(0);

localStorage.setItem("last-visit", Date.now());