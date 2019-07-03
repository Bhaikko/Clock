let expandButton = document.getElementById("expandButton");
let clockButton = document.getElementsByClassName("clockButton");
let stopwatchButton = document.getElementsByClassName("stopwatchButton");
let timerButton = document.getElementsByClassName("timerButton");

let leftBar = document.getElementsByClassName("leftBar");
let leftBarExpanded = document.getElementsByClassName("leftBarExpanded");

expandButton.addEventListener("click", function()
{
    leftBarExpanded[0].classList.add("active");
    leftBar[0].classList.remove("active");
})

function enableLeftBar()
{
    console.log("clicked");
    leftBar[0].classList.add("active");
    leftBarExpanded[0].classList.remove("active");
}

clockButton[1].addEventListener("click", enableLeftBar);
stopwatchButton[1].addEventListener("click", enableLeftBar);
timerButton[1].addEventListener("click", enableLeftBar);
