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

function enableClock()
{
    clock.classList.add("active");
    stopwatch.classList.remove("active");
    splitbox.classList.remove("active");
    timer.classList.remove("active");
    enableLeftBar();
    clockButton[0].parentElement.classList.add("selected");
    clockButton[1].parentElement.classList.add("selected");
    stopwatchButton[0].parentElement.classList.remove("selected");
    stopwatchButton[1].parentElement.classList.remove("selected");
    timerButton[0].parentElement.classList.remove("selected");
    timerButton[1].parentElement.classList.remove("selected");
}

function enableStopwatch()
{
    clock.classList.remove("active");
    stopwatch.classList.add("active");
    splitbox.classList.add("active");
    timer.classList.remove("active");
    enableLeftBar();

    clockButton[0].parentElement.classList.remove("selected");
    clockButton[1].parentElement.classList.remove("selected");
    stopwatchButton[0].parentElement.classList.add("selected");
    stopwatchButton[1].parentElement.classList.add("selected");
    timerButton[0].parentElement.classList.remove("selected");
    timerButton[1].parentElement.classList.remove("selected");
}

function enableTimer()
{
    clock.classList.remove("active");
    stopwatch.classList.remove("active");
    splitbox.classList.remove("active");
    timer.classList.add("active");
    enableLeftBar();

    clockButton[0].parentElement.classList.remove("selected");
    clockButton[1].parentElement.classList.remove("selected");
    stopwatchButton[0].parentElement.classList.remove("selected");
    stopwatchButton[1].parentElement.classList.remove("selected");
    timerButton[0].parentElement.classList.add("selected");
    timerButton[1].parentElement.classList.add("selected");
}

clockButton[0].addEventListener("click", enableClock);
clockButton[1].addEventListener("click", enableClock);
stopwatchButton[0].addEventListener("click", enableStopwatch);
stopwatchButton[1].addEventListener("click", enableStopwatch);
timerButton[0].addEventListener("click", enableTimer);
timerButton[1].addEventListener("click", enableTimer);
