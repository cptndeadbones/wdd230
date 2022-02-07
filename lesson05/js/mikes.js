// let day = today.getDay();
let saturdayMsg = document.getElementsByClassName("special");
// saturdayMsg.addEventListener("onload", eventShow());

function eventShow() {
    if(day == 0) { saturdayMsg.classList.add("reveal"); 
    } else { saturdayMsg.classList.remove("reveal"); 
    }
}