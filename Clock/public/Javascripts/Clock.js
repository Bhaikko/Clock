// let clock = document.getElementById("clock");
let day = $("#day");
let timeOfDay = $("#timeOfDay");
let hourClock = $("#hourClock");
let minuteClock = $("#minuteClock");
let secondClock = $("#secondClock");
let dateClock = $("#dateClock");
let monthClock = $("#monthClock");
let yearClock = $("#yearClock");

let zonesList = $("#zonesList");
let fetchedDate = null;

let currentDay = null;
let currentTime = null;
let currentHour = null;
let currentMinute = null;
let currentSecond = null;
let currentDate = null;
let currentMonth= null;
let currentYear = null;


$.get("/getZones", (zones) =>
{
    zones.map((zone) =>
    {
        zonesList.append(`<div class="dropdown-item">${zone}</div>`);
    });

    zonesList.children().map((index) =>
    {
        zonesList.children()[index].addEventListener("click", (event) =>
        {
            let cityAndCountry = event.target.innerText.split("/");
            let city = cityAndCountry[1];
            let country = cityAndCountry[0];

            $("#place").text(city + ", " + country);
            jQuery.post("/getTime", {zone: zonesList.children()[index].innerText}, (data) => 
            {
                fetchedDate = data;
                let currentData = data.split(" ");

                currentDay = currentData[0];
                currentTime = currentData[4].split(":");
                currentHour = currentTime[0];
                currentMinute = currentTime[1];
                currentSecond = currentTime[2];
                currentDate = currentData[2];
                currentMonth = currentData[1];
                currentYear = currentData[3];
            });
        });
    });
});

function setClockData()
{
    if(bClockRunning && fetchedDate)
    {    
        //Day Setup
        if(currentDay == "Sun")
            day.text("Sunday");
        else if(currentDay == "Mon")
            day.text("Monday");
        else if(currentDay == "Tue")
            day.text("Tuesday");
        else if(currentDay == "Wed")
            day.text("Wednesday");
        else if(currentDay == "Thu")
            day.text("Thursday");
        else if(currentDay == "Fri")
            day.text("Friday");
        else if(currentDay == "Sat")
            day.text("Saturday");

        //Time Of Day Setup
        if(currentHour>="06" && currentHour<"12")
            timeOfDay.text("Morning");
        else if(currentHour>="12" && currentHour<"17")
            timeOfDay.text("Afternoon");
        else if(currentHour>="17" && currentHour<"20")
            timeOfDay.text("Evening");
        else
            timeOfDay.text("Night");

        //Time Setup
        hourClock.text(currentHour + " : ");
        minuteClock.text(currentMinute + " : ");
        secondClock.text(currentSecond);

        //Date Setup
        dateClock.text(currentDate + " - ");
        monthClock.text(currentMonth + " - ");
        yearClock.text(currentYear);

        currentSecond++;
        if(currentSecond >= 59)
        {
            currentMinute++;
            currentSecond = 0;
            if(currentMinute >= 59)
            {
                currentMinute = 0;
                currentHour++;
                if(currentHour >= 24)
                    currentHour = 0;

            }
        }


    }
}

setInterval(setClockData, 1000);

