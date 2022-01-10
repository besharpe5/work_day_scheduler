var events = {};
var currentDay = moment().format("dddd, MMMM D, YYYY h:mm A");

// this will display the current date and time.
$("#currentDay").replaceWith(currentDay);