let clockButton = $("#clockButton");
let stopwatchButton = $("#stopwatchButton");
let timerButton = $("#timerButton");

let clock = $("#clock");
let stopwatch = $("#stopwatch");
let splitbox = $("#splitbox");
let timer = $("#timer");

let bClockRunning = false;

clockButton.click(function()
{
    bClockRunning = true;
    clock.addClass("active");
    stopwatch.removeClass("active");
    splitbox.removeClass("active");
    timer.removeClass("active");

    clockButton.addClass("selected");
    stopwatchButton.removeClass("selected");
    timerButton.removeClass("selected");
});

stopwatchButton.click(function()
{
    bClockRunning = false;

    clock.removeClass("active");
    stopwatch.addClass("active");
    splitbox.addClass("active");
    timer.removeClass("active");

    clockButton.removeClass("selected");
    stopwatchButton.addClass("selected");
    timerButton.removeClass("selected");
});

timerButton.click(function()
{
    bClockRunning = false;

    clock.removeClass("active");
    stopwatch.removeClass("active");
    splitbox.removeClass("active");
    timer.addClass("active");

    clockButton.removeClass("selected");
    stopwatchButton.removeClass("selected");
    timerButton.addClass("selected");
});

