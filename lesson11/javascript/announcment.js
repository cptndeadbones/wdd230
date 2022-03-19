const eggs = d.getDay();
let saturdayMsg = document.querySelector(".pancakes");

function breakfast(){
  if (eggs === 1 || eggs === 2){
      saturdayMsg.classList.remove("syrup");
    } else { saturdayMsg.classList.add("syrup");
    }
}

breakfast()