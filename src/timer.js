import mySoundFile from "../dist/assets/sound2.mp3";

const startingM = 25 ; 
let time = startingM * 60 ;

var hasfinished = false ;  
let count = 0 ; 
let countdownEl ;
let mySound = new Audio(mySoundFile);

console.log(mySound);

export const updateCountdown=()=>{
     countdownEl = document.getElementById("countdown");
    const minutes = Math.floor(time/60);
    let seconds = time % 60 ;

    seconds = seconds < 10 ? "0" + seconds : seconds;

   
        countdownEl.innerHTML = `${minutes}:${seconds}`;


    if (time > 0) {
        time--;
    }

    if (minutes == 0 && seconds == 0 ){
        if (!hasfinished)
            {
                mySound.play()
                alert("time for a break")
                mySound.pause();
                mySound.currentTime = 0;
                time = 5 * 60; 
                countdownEl.innerHTML = "5:00";
                hasfinished = true;
            }
            else if (count == 4) {
                mySound.play()
                alert("time for the real break ")
                mySound.pause();
                mySound.currentTime = 0;
                time =  15 * 60; 
                countdownEl.innerHTML = "15:00";
                hasfinished = true;
            }
            else{
                mySound.play()
                alert("back to work ")
                mySound.pause();
                mySound.currentTime = 0;
                time = 25 * 60; 
                countdownEl.innerHTML = "25:00";
                hasfinished = false;
                count++ ; 
            }
    }

}

export const skipfunc = () => {
    if (!hasfinished && count!= 4 ) {
        mySound.play()
        alert("Time for a break!");
        mySound.pause();
        mySound.currentTime = 0;
        time = 5 * 60; 
        countdownEl.innerHTML = "5:00";
        hasfinished = true;

    } else if (count === 4) {
        mySound.play()
        alert("Time for the real break!");
        mySound.pause();
        mySound.currentTime = 0;
        time = 15 * 60;
        countdownEl.innerHTML = "15:00";
        hasfinished = true;
        count = 0 ; 
        

    } else {
        mySound.play()
        alert("Back to work!");
        mySound.pause();
        mySound.currentTime = 0;
        time = 25 * 60; 
        countdownEl.innerHTML = "25:00";
        hasfinished = false; 
        count++; 
        console.log(count);
        

    }
};
