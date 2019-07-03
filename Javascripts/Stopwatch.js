let startStopButton = document.getElementById("startStopButton");
let splitResetButton = document.getElementById("splitResetButton");

let minuteStopwatch = document.getElementById("minuteStopwatch");
let secondStopwatch = document.getElementById("secondStopwatch");
let milisecondStopwatch = document.getElementById("milisecondStopwatch");

let splitBox = document.getElementsByClassName("splitBox")[0];

let miliseconds = 0;
let seconds = 0;
let minutes = 0;

let bStarted = false;

startStopButton.addEventListener("click", function()
{    
    let stopwatchId = null;
    if(!bStarted)
    {
        stopWatchId = setInterval(startStopwatch, 10);
        startStopButton.innerText = "Stop";
        splitResetButton.innerText = "Split";
        bStarted = true;
    }
    else if(bStarted)
    {
        clearInterval(stopWatchId);
        startStopButton.innerText = "Start";
        splitResetButton.innerText = "Reset";
        bStarted = false;
    }
})

splitResetButton.addEventListener("click", function()
{
    if(!bStarted)
    {
        miliseconds = 0;
        seconds = 0;
        minutes = 0;

        minuteStopwatch.innerText = " " + minutes + " : ";
        secondStopwatch.innerText = seconds + " : ";
        milisecondStopwatch.innerText = miliseconds;
    }
    else if(bStarted) 
    {
        
    }
})

function startStopwatch()
{
    if(miliseconds > 100)
    {
        miliseconds = 0;
        seconds++;
    }
    if(seconds >= 60)
    {
        seconds=0;
        minutes++;
    }
    miliseconds++;

    minuteStopwatch.innerText = " " + minutes + " : ";
    secondStopwatch.innerText = seconds + " : ";
        
    milisecondStopwatch.innerText = miliseconds;
    
}
