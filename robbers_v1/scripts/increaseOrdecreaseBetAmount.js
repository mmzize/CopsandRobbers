   var betamount = 0;
   var totalbetamount = 0;
   var runningtotal = 50;
   var decimalPlace=".00";

   function increasebetvaluebyt1(){
    betamount=betamount+1;
    document.getElementById("betamountvalue").value = betamount + decimalPlace;
   }
   function increasebetvaluebyt2(){
    betamount = betamount + 2;
    document.getElementById("betamountvalue").value = betamount + decimalPlace;
   }
   function increasebetvaluebyt10(){
    betamount = betamount + 10;
    document.getElementById("betamountvalue").value = betamount + decimalPlace;
   }
   function increasebetvaluebyt20(){
    betamount = betamount + 20;
    document.getElementById("betamountvalue").value = betamount + decimalPlace;
   }
   function increasebetvaluebyt100(){
    betamount = betamount + 100;
    document.getElementById("betamountvalue").value = betamount + decimalPlace;
   }
   function increasebetvaluebyt50(){
    betamount = betamount + 50;
    document.getElementById("betamountvalue").value = betamount + decimalPlace;
   }
   function resetbetamount(){
    betamount = 0;
    document.getElementById("betamountvalue").value = betamount + decimalPlace;
   }