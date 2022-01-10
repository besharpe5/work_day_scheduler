var events = {};
var currentDay = moment().format("dddd, MMMM D, YYYY h:mm A");

// this will display the current date and time.
$("#currentDay").replaceWith(currentDay);

//this will load events from local storage
var displayEvents = function() {
    events = JSON.parse(localStorage.getItem("events"));

    if (!events) {
        events = {
            nineAm: "",
            tenAm: "",
            elevenAm: "",
            twelvePm: "",
            onePm: "",
            twoPm: "",
            threePm: "",
            fourPm: "",
            fivePm: ""
        };
    }

    $.each(events, function(list, currentValue) {
        $("#row-" + list).append(currentValue);
    });
    checkTheTime();
};

// this function will save events
var saveEvents = function() {
    localStorage.setItem("events", JSON.stringify(events));
};

$(".saveBtn").click(function() {
    var eventInputNineAm = document.getElementById("row-nineAm").value;
    events.nineAm = eventInputNineAm;

    var eventInputTenAm = document.getElementById("row-tenAm").value;
    events.tenAm = eventInputTenAm;

    var eventInputElevenAm = document.getElementById("row-elevenAm").value;
    events.elevenAm = eventInputElevenAm;

    var eventInputTwelvePm = document.getElementById("row-twelvePm").value;
    events.twelvePm = eventInputTwelvePm;

    var eventInputOnePm = document.getElementById("row-onePm").value;
    events.onePm = eventInputOnePm;

    var eventInputTwoPm = document.getElementById("row-twoPm").value;
    events.twoPm = eventInputTwoPm;

    var eventInputThreePm = document.getElementById("row-threePm").value;
    events.threePm = eventInputThreePm;

    var eventInputFourPm = document.getElementById("row-fourPm").value;
    events.fourPm = eventInputFourPm;

    var eventInputFivePm = document.getElementById("row-fivePm").value;
    events.fivePm = eventInputFivePm;

    saveEvents();
});

var checkTheTime = function() {
    var hour = moment().format("kk");
    $(".time-block").each(function(){
        var time = $(this).attr("id");

    if (hour === time) {
        $(this).children("textarea").removeClass("future past");
        $(this).children("textarea").addClass("present");
    } 
    else if (hour > time) {
        $(this).children("textarea").removeClass("present future");
        $(this).children("textarea").addClass("past");
    }
    else if (hour < time) {
        $(this).children("textarea").removeClass("present past");
        $(this).children("textarea").addClass("future");
    }
    });
};

setInterval(function(){
    checkTheTime();
},(1000 * 60) * 5);

saveEvents();



