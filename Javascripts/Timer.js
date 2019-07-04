let timer = document.getElementById("timer");
let timeUpText = document.getElementById("timeUpText");

let hourIncreaseButton = document.getElementById("hourIncreaseButton");
let hourDisplay = document.getElementById("hourDisplay");
let hourDecreaseButton = document.getElementById("hourDecreaseButton");

let minuteIncreaseButton = document.getElementById("minuteIncreaseButton");
let minuteDisplay = document.getElementById("minuteDisplay");
let minuteDecreaseButton = document.getElementById("minuteDecreaseButton");

let secondIncreaseButton = document.getElementById("secondIncreaseButton");
let secondDisplay = document.getElementById("secondDisplay");
let secondDecreaseButton = document.getElementById("secondDecreaseButton");

let startPauseButton = document.getElementById("startPauseButton");
let resetButton = document.getElementById("resetButton");

let bTimerStarted = false;
let timerId = null;

let timerInitialSeconds = 0;
let timerInitialMinutes = 0;
let timerInitialHours = 0;


hourIncreaseButton.addEventListener("click", function()
{
    if(parseInt(hourDisplay.innerText) < 24 && !bTimerStarted)
    {
        hourDisplay.innerText = parseInt(hourDisplay.innerText) + 1;
        hourDisplay.innerText += " h"
    }    
});

hourDecreaseButton.addEventListener("click", function()
{
    if(hourDisplay.innerText > "1" && !bTimerStarted)
    {
        hourDisplay.innerText = parseInt(hourDisplay.innerText) - 1;
        hourDisplay.innerText += " h"
    }
});

minuteIncreaseButton.addEventListener("click", function()
{
    if(parseInt(minuteDisplay.innerText) < 58 && !bTimerStarted)
    {
        minuteDisplay.innerText = parseInt(minuteDisplay.innerText) + 1;
        minuteDisplay.innerText += " m"
    }
});

minuteDecreaseButton.addEventListener("click", function()
{
    if(minuteDisplay.innerText > "1" && !bTimerStarted)
    {
        minuteDisplay.innerText = parseInt(minuteDisplay.innerText) - 1;
        minuteDisplay.innerText += " m"
    }
});

secondIncreaseButton.addEventListener("click", function()
{
    if(parseInt(secondDisplay.innerText) < 58 && !bTimerStarted)
    {
        secondDisplay.innerText = parseInt(secondDisplay.innerText) + 1;
        secondDisplay.innerText += " s"
    }
});

secondDecreaseButton.addEventListener("click", function()
{
    if(secondDisplay.innerText > "1" && !bTimerStarted)
    {
        secondDisplay.innerText = parseInt(secondDisplay.innerText) - 1;
        secondDisplay.innerText += " s"
    }
});

startPauseButton.addEventListener("click", function()
{    
    timerInitialHours = parseInt(hourDisplay.innerText);
    timerInitialMinutes = parseInt(minuteDisplay.innerText);
    timerInitialSeconds = parseInt(secondDisplay.innerText);
    timeUpText.classList.remove("active");
    if(!bTimerStarted)
    {
        timerId = setInterval(startTimer, 1000);
        startPauseButton.innerText = "Stop";
        bTimerStarted = true;
    }
    else if(bTimerStarted)
    {
        clearInterval(timerId);
        startPauseButton.innerText = "Start";
        bTimerStarted = false;
    }
});

resetButton.addEventListener("click", function()
{
    if(!bTimerStarted)
    {
        timerInitialHours = 0;
        timerInitialMinutes = 0;
        timerInitialSeconds = 0;
        hourDisplay.innerText = timerInitialHours + " h";
        minuteDisplay.innerText = timerInitialMinutes + " m";
        secondDisplay.innerText = timerInitialSeconds + " s";
    }
})

function startTimer()
{
    if(timerInitialHours == 0 && timerInitialMinutes == 0 && timerInitialSeconds == 0)
    { 
        timeup();
        return;
    }

    timerInitialSeconds--;

    if(timerInitialSeconds < 0)
    {
        timerInitialMinutes--;
        timerInitialSeconds = 59;
    }
    if(timerInitialMinutes < 0)
    {
        timerInitialHours--;
        timerInitialMinutes = 59;
    }

    hourDisplay.innerText = timerInitialHours + " h";
    minuteDisplay.innerText = timerInitialMinutes + " m";
    secondDisplay.innerText = timerInitialSeconds + " s";

}

function timeup()
{
    clearInterval(timerId);
    timeUpText.classList.add("active");
    startPauseButton.innerText = "Start";
    bTimerStarted = false;
    timerInitialHours = 0;
    timerInitialMinutes = 0;
    timerInitialSeconds = 0;
    hourDisplay.innerText = timerInitialHours + " h";
    minuteDisplay.innerText = timerInitialMinutes + " m";
    secondDisplay.innerText = timerInitialSeconds + " s";
}