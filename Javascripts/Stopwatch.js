let stopwatch = document.getElementById("stopwatch");
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

var stopwatchId = null;
var previousMiliseconds = 0;
var previousSeconds = 0;
var previousMinutes = 0;
var currentCount = 0;

startStopButton.addEventListener("click", function()
{    
    
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

        splitBoxChildren = document.querySelectorAll(".splitBox>.splitBoxRow");
        for(let i=1; i<splitBoxChildren.length; i++)
            splitBoxChildren[i].remove();

        previousMiliseconds = 0;
        previousSeconds = 0;
        previousMinutes = 0;
        currentCount = 0;
        
    }
    else if(bStarted) 
    {
        
        let splitBoxRow = document.createElement("div");
        splitBoxRow.classList.add("splitBoxRow");
        
        let countNumber = document.createElement("div");
        countNumber.id = "countNumber";
        countNumber.innerText = currentCount;
        currentCount++;

        let splitTime = document.createElement("div");
        splitTime.id = "splitTime";
        splitTime.innerText = minutes + ":" + seconds + "." + miliseconds;

        let deltaTime = document.createElement("div");
        deltaTime.id = "deltaTime";
        deltaTime.innerText = "+" + (Math.abs(parseInt(minuteStopwatch.innerText) - previousMinutes)) + ":" + (Math.abs(parseInt(secondStopwatch.innerText) - previousSeconds)) + "." + (Math.abs(parseInt(milisecondStopwatch.innerText) - previousMiliseconds));
    
        splitBoxRow.appendChild(countNumber);
        splitBoxRow.appendChild(splitTime);
        splitBoxRow.appendChild(deltaTime);

        splitBox.appendChild(splitBoxRow);

        previousMinutes = parseInt(minuteStopwatch.innerText);
        previousSeconds = parseInt(secondStopwatch.innerText);
        previousMiliseconds = parseInt(milisecondStopwatch.innerText);
        
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
