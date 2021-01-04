const secondsRec = document.querySelector(".seconds");
const minutesRec = document.querySelector(".minutes");
const hoursRec = document.querySelector(".hours");


function setDate(){
    const ttime = new Date();

    const tseconds = ttime.getSeconds();
    const secondsDegrees = (tseconds/60) * 360;
    secondsRec.style.transform = `rotate(${secondsDegrees}deg)`;
   
    const tminutes = ttime.getMinutes();
    const minutessDegrees = (tminutes/60) * 360;
    minutesRec.style.transform = `rotate(${minutessDegrees}deg)`;


    const thours = ttime.getHours() % 12;
    const hoursDegrees = (thours /12) * 360;
    hoursRec.style.transform = `rotate(${hoursDegrees}deg)`;



    if (secondsDegrees == 354 || minutessDegrees == 354 || hoursDegrees == 354){
        secondsRec.classList.add('notransition');
    }
    else{
        secondsRec.style.transform = `rotate(${secondsDegrees}deg)`;
        
    }
}

setInterval(setDate , 1000);
