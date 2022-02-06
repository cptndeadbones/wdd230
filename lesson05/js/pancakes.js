const day = new Date();
const eggs = day.getDay();

let saturdayMsg = document.querySelector(".pancakes");

function breakfast(){
  //days need to be adjusted to handle mon && tuesday. 
  if (eggs == 5){
      saturdayMsg.classList.remove("syrup");
    }
  else {saturdayMsg.classList.add("syrup");
}
}

breakfast();
