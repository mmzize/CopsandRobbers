  const playButton = document.getElementsByClassName("play")[0];
  const second = document.getElementsByClassName("sec")[0];
  const centiSecond = document.getElementsByClassName("msec")[0];
  const laps = document.getElementsByClassName("laps")[0];
  const bg = document.getElementsByClassName("outer-circle")[0];
  const toggleButton = () => {
      
  }
  const lap = () => {
      const li = document.createElement("li");
      const number = document.createElement("span");
      const timeStamp = document.createElement("span");

      li.setAttribute("class", "lap-item");
      number.setAttribute("class", "number");
      timeStamp.setAttribute("class", "time-stamp");

      timeStamp.innerHTML = `${secCounter} : ${centiCounter}`;

      li.append(number, timeStamp);
      laps.append(li)
  }