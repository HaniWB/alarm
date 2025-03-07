import _ from "lodash"; // Import Lodash
import { updateCountdown  , skipfunc} from "./timer.js";
var hasstarted = false; 
let timerId ; 



const startButton = document.getElementById("start");

  startButton.addEventListener('click', function() {
    if(!hasstarted){
	timerId = setInterval(updateCountdown, 1000);
    hasstarted = true ; 
    }
});


const stopButton = document.getElementById("stop");
stopButton.addEventListener('click', function() {
	clearInterval(timerId);
    hasstarted = false;
});

const skipbutton = document.getElementById("skip");

skipbutton.addEventListener('click', function () {
   skipfunc();
} );
