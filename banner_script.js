window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 && (( window.innerWidth >= 800 ) && ( window.innerHeight >= 600 ))) {
    document.getElementById("bannerimage").style.maxHeight = "70px";
    document.getElementById("bbuttoncontainer").style.top = "min(22vw, 50px)";
    document.getElementById("content").style.top = "min(10.5vw, 180px)";
    const buttons = document.getElementsByClassName("bannerbutton");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.fontSize = "min(2.5vw, 15px)";
    }
  } else {
    document.getElementById("bannerimage").style.maxHeight = "12.5vw";
    document.getElementById("bbuttoncontainer").style.top = "11.5vw";
    document.getElementById("content").style.top = "min(12vw, 300px)";
    const buttons = document.getElementsByClassName("bannerbutton");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.fontSize = "1.8vw";
    }
  }
}