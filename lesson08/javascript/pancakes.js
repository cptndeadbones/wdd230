const day = new Date();
const eggs = day.getDay();

let saturdayMsg = document.querySelector(".pancakes");

function breakfast(){
  if (eggs == 5){
      saturdayMsg.classList.remove("syrup");
    }
  else {
    saturdayMsg.classList.add("syrup");
}
}

breakfast();
