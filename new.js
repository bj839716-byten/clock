function clockRotation() {
setInterval(function () {
var date = new Date();
var seconds = date. getSeconds);
var minutes = date. getMinutes();
var hours = date. getHours();
var secondsRotation = seconds * 6;
var minutesRotation = minutes * 6;
var hoursRotation = hours * 30 + minutes / 2;
$("#seconds"). css ({
"-webkit-transform": "rotate(" +
secondsRotation + "deg)", transform: "rotate(" + secondsRotation + "deg) "
});
}, 1000);

}