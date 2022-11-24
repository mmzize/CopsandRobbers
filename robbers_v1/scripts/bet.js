var betamount = 0;
   var totalbetamount = 0;
   var runningtotal = 50;
   var decimalPlace=".00";

   let isPlay = false
   let isReset = false

   let sec;
   let centiSec;

   let secCounter = 0;
   let centiCounter = 0;

   function bet() {
    runningtotal = runningtotal - betamount;
    document.getElementById("winnings").value = runningtotal;
    if(runningtotal<betamount){
      playButton.classList.add("hidden");
      runningtotal = 0;
      document.getElementById("winnings").value = runningtotal;
    }else if(!isPlay && !isReset) {  
        bg.classList.add("animation-bg");
          
        sec = setInterval(() => {
              second.innerHTML = `${++secCounter}. `;
          }, 1000);

        centiSec = setInterval(() => {
              if(centiCounter === 99) {
                  centiCounter = 0;  
              }
              centiSecond.innerHTML = `${++centiCounter}`;
              let total
              total = secCounter + (centiCounter/100);
              totalbetamount= total*betamount;
              totalbetamount=totalbetamount;
              var decimal =Math.floor(totalbetamount);
              playButton.innerHTML = decimal + decimalPlace;
          
          }, 180);

          isPlay = false;
          isReset = true; 
      } 
      toggleButton();
  }