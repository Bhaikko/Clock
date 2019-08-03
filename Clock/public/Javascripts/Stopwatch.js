let startStopButton = $("#startStopButton");
let splitResetButton = $("#splitResetButton");

let minuteStopwatch = $("#minuteStopwatch");
let secondStopwatch = $("#secondStopwatch");
let milisecondStopwatch = $("#milisecondStopwatch");

let miliseconds = 0;
let seconds = 0;
let minutes = 0;

let bStarted = false;

var stopwatchId = null;
var previousMiliseconds = 0;
var previousSeconds = 0;
var previousMinutes = 0;
var currentCount = 0;

startStopButton.click(function()
{    
    
    if(!bStarted)
    {
        stopWatchId = setInterval(startStopwatch, 10);
        startStopButton.text("Stop");
        splitResetButton.text("Split");
        bStarted = true;
    }
    else if(bStarted)
    {
        clearInterval(stopWatchId);
        startStopButton.text("Start");
        splitResetButton.text("Reset");
        bStarted = false;
    }
})

splitResetButton.click(function()
{
    if(!bStarted)
    {
        miliseconds = 0;
        seconds = 0;
        minutes = 0;

        minuteStopwatch.text(" " + minutes + " : ");
        secondStopwatch.text(seconds + " : ");
        milisecondStopwatch.text(miliseconds);

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
        countNumber.text(currentCount);
        currentCount++;

        let splitTime = document.createElement("div");
        splitTime.id = "splitTime";
        splitTime.text(minutes + ":" + seconds + "." + miliseconds);

        let deltaTime = document.createElement("div");
        deltaTime.id = "deltaTime";

        deltaTime.text((Math.abs(parseInt(minuteStopwatch[0].innerText) - previousMinutes)) + ":" + (Math.abs(parseInt(secondStopwatch[0].innerText) - previousSeconds)) + "." + (Math.abs(parseInt(milisecondStopwatch[0].innerText) - previousMiliseconds)));
        
        splitBoxRow.appendChild(countNumber);
        splitBoxRow.appendChild(splitTime);
        splitBoxRow.appendChild(deltaTime);

        splitBox.appendChild(splitBoxRow);

        previousMinutes = parseInt(minuteStopwatch[0].innerText);
        previousSeconds = parseInt(secondStopwatch[0].innerText);
        previousMiliseconds = parseInt(milisecondStopwatch[0].innerText);
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

    minuteStopwatch.text(" " + minutes + " : ");
    secondStopwatch.text(seconds + " : ");
        
    milisecondStopwatch.text(miliseconds);
    
}
