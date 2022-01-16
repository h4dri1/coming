const countDownDate = new Date("Feb 9, 2022 00:00:00").getTime();

const x = setInterval(() => {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (hours < 10) {
        hours = "0" + hours
    }
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }

    document.getElementById("countdown-timer").innerHTML = "<div><span class='days'>" + days + ":</span></div>" +
    "<div><span class='hours'>" + hours + ":</span></div>" +
    "<div><span class='minutes'>" + minutes + ":</span></div>" + 
    "<div><span class='seconds'>" + seconds + "</span></div>";
    
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown-timer").innerHTML = "Launch day";
    }
  }, 1000); 