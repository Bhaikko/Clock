let clock = document.getElementById("clock");
let day = document.getElementById("day");
let timeOfDay = document.getElementById("timeOfDay");
let hourClock = document.getElementById("hourClock");
let minuteClock = document.getElementById("minuteClock");
let secondClock = document.getElementById("secondClock");
let dateClock = document.getElementById("dateClock");
let monthClock = document.getElementById("monthClock");
let yearClock = document.getElementById("yearClock");



function setClockData()
{
    let bClockRunning = clock.getAttribute("class").includes("active");
    if(bClockRunning)
    {
        // console.log("Clock Running");
        const currentDate = (new Date()).toString().split(" ");

        //Day Setup
        if(currentDate[0]=="Sun")
            day.innerText = "Sunday";
        else if(currentDate[0]=="Mon")
            day.innerText = "Monday";
        else if(currentDate[0]=="Tue")
            day.innerText = "Tuesday";
        else if(currentDate[0]=="Wed")
            day.innerText = "Wednesday";
        else if(currentDate[0]=="Thu")
            day.innerText = "Thursday";
        else if(currentDate[0]=="Fri")
            day.innerText = "Friday";
        else if(currentDate[0]=="Sat")
            day.innerText = "Saturday";

        //Time Of Day Setup
        const time = currentDate[4].split(":");
        if(time[0]>="06" && time[0]<"12")
            timeOfDay.innerText = "Morning";
        else if(time[0]>="12" && time[0]<"17")
            timeOfDay.innerText = "Afternoon";
        else if(time[0]>="17" && time[0]<"20")
            timeOfDay.innerText = "Evening";
        else
            timeOfDay.innerText = "Night";

        //Time Setup
        hourClock.innerText = time[0] + " : ";
        minuteClock.innerText = time[1] + " : ";
        secondClock.innerText = time[2];

        //Date Setup
        dateClock.innerText = currentDate[2] + " - ";
        monthClock.innerText = currentDate[1] + " - ";
        yearClock.innerText = currentDate[3];
    }
}

setInterval(setClockData, 1000);

