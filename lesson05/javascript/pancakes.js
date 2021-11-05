const day = new Date();
const eggs = day.getDay();

let saturdayMsg = document.querySelector(".pancakes");
saturdayMsg.addEventListener("onload", breakfast());

function breakfast(){
  if (eggs == 5){
      saturdayMsg.classList.remove("syrup");
    }
  else {saturdayMsg.classList.add("syrup");
}
}
