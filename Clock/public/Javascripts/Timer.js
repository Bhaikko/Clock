let timeUpText = $("#timeUpText");

let hourIncreaseButton = $("#hourIncreaseButton");
let hourDisplay = $("#hourDisplay");
let hourDecreaseButton = $("#hourDecreaseButton");

let minuteIncreaseButton = $("#minuteIncreaseButton");
let minuteDisplay = $("#minuteDisplay");
let minuteDecreaseButton = $("#minuteDecreaseButton");

let secondIncreaseButton = $("#secondIncreaseButton");
let secondDisplay = $("#secondDisplay");
let secondDecreaseButton = $("#secondDecreaseButton");

let startPauseButton = $("#startPauseButton");
let resetButton = $("#resetButton");

let bTimerStarted = false;
let timerId = null;

let timerInitialSeconds = 0;
let timerInitialMinutes = 0;
let timerInitialHours = 0;


hourIncreaseButton.click(function()
{
    if(parseInt(hourDisplay.text()) < 24 && !bTimerStarted)
    {
        hourDisplay.text(parseInt(hourDisplay.text()) + 1);
        hourDisplay.text(hourDisplay.text() + " h");
    }    
});

hourDecreaseButton.click(function()
{
    if(hourDisplay.text() > "1" && !bTimerStarted)
    {
        hourDisplay.text(parseInt(hourDisplay.text()) - 1);
        hourDisplay.text(hourDisplay.text() + " h");
    }
});

minuteIncreaseButton.click(function()
{
    if(parseInt(minuteDisplay.text()) < 58 && !bTimerStarted)
    {
        minuteDisplay.text(parseInt(minuteDisplay.text()) + 1);
        minuteDisplay.text(minuteDisplay.text() + " m");
    }
});

minuteDecreaseButton.click(function()
{
    if(minuteDisplay.text() > "1" && !bTimerStarted)
    {
        minuteDisplay.text() = parseInt(minuteDisplay.text()) - 1;
        minuteDisplay.text(minuteDisplay.text() + " m");
    }
});

secondIncreaseButton.click(function()
{
    if(parseInt(secondDisplay.text()) < 58 && !bTimerStarted)
    {
        secondDisplay.text(parseInt(secondDisplay.text()) + 1);
        secondDisplay.text(secondDisplay.text() + " s");
    }
});

secondDecreaseButton.click(function()
{
    if(secondDisplay.text() > "1" && !bTimerStarted)
    {
        secondDisplay.text(parseInt(secondDisplay.text()) - 1);
        secondDisplay.text(secondDisplay.text() + " s");
    }
});

startPauseButton.click(function()
{    
    timerInitialHours = parseInt(hourDisplay.text());
    timerInitialMinutes = parseInt(minuteDisplay.text());
    timerInitialSeconds = parseInt(secondDisplay.text());
    timeUpText.classList.remove("active");
    if(!bTimerStarted)
    {
        timerId = setInterval(startTimer, 1000);
        startPauseButton.text("Stop");
        bTimerStarted = true;
    }
    else if(bTimerStarted)
    {
        clearInterval(timerId);
        startPauseButton.text("Start");
        bTimerStarted = false;
    }
});

resetButton.click(function()
{
    if(!bTimerStarted)
    {
        timerInitialHours = 0;
        timerInitialMinutes = 0;
        timerInitialSeconds = 0;
        hourDisplay.text(timerInitialHours + " h");
        minuteDisplay.text(timerInitialMinutes + " m");
        secondDisplay.text(timerInitialSeconds + " s");
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

    hourDisplay.text(timerInitialHours + " h");
    minuteDisplay.text(timerInitialMinutes + " m");
    secondDisplay.text(timerInitialSeconds + " s");

}

function timeup()
{
    clearInterval(timerId);
    timeUpText.addClass("active");
    startPauseButton.text("Start");
    bTimerStarted = false;
    timerInitialHours = 0;
    timerInitialMinutes = 0;
    timerInitialSeconds = 0;
    hourDisplay.text(timerInitialHours + " h");
    minuteDisplay.text(timerInitialMinutes + " m");
    secondDisplay.text(timerInitialSeconds + " s");
}