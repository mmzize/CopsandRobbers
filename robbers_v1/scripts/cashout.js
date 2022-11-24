function Cashout(){
    clearInterval(sec);
    clearInterval(centiSec);
    isPlay = false;
    isReset = false; 
    runningtotal = runningtotal + totalbetamount;
    runningtotal.toFixed(2);
    document.getElementById("winnings").value = runningtotal;
    playButton.innerHTML = "BET";
    second.innerHTML = '0.';
    centiSecond.innerHTML = '0';
    secCounter = 0;
    centiCounter = 0;
    totalbetamount = 0;
    total = 0;
  }