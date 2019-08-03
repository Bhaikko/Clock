// let clock = document.getElementById("clock");
let day = $("#day");
let timeOfDay = $("#timeOfDay");
let hourClock = $("#hourClock");
let minuteClock = $("#minuteClock");
let secondClock = $("#secondClock");
let dateClock = $("#dateClock");
let monthClock = $("#monthClock");
let yearClock = $("#yearClock");


function setClockData()
{
    // bClockRunning = clock[0].getAttribute("class").includes("active");
    if(bClockRunning)
    {
        // console.log("Clock Running");
        const currentDate = (new Date()).toString().split(" ");
    
        //Day Setup
        if(currentDate[0]=="Sun")
            day.text("Sunday");
        else if(currentDate[0]=="Mon")
            day.text("Monday");
        else if(currentDate[0]=="Tue")
            day.text("Tuesday");
        else if(currentDate[0]=="Wed")
            day.text("Wednesday");
        else if(currentDate[0]=="Thu")
            day.text("Thursday");
        else if(currentDate[0]=="Fri")
            day.text("Friday");
        else if(currentDate[0]=="Sat")
            day.text("Saturday");

        //Time Of Day Setup
        const time = currentDate[4].split(":");
        if(time[0]>="06" && time[0]<"12")
            timeOfDay.text("Morning");
        else if(time[0]>="12" && time[0]<"17")
            timeOfDay.text("Afternoon");
        else if(time[0]>="17" && time[0]<"20")
            timeOfDay.text("Evening");
        else
            timeOfDay.text("Night");

        //Time Setup
        hourClock.text(time[0] + " : ");
        minuteClock.text(time[1] + " : ");
        secondClock.text(time[2]);

        //Date Setup
        dateClock.text(currentDate[2] + " - ");
        monthClock.text(currentDate[1] + " - ");
        yearClock.text(currentDate[3]);
    }
}

setInterval(setClockData, 1000);

