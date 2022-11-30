
function getTime() {
    const fullDate = new Date();
    let hours = fullDate.getHours();
    let minutes = fullDate.getMinutes();
    let seconds = fullDate.getSeconds();
    let month = fullDate.getMonth();
    let weekday = fullDate.getDay();
    let day = fullDate.getDate();

    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


    if (hours < 10) {
        hours = "0" + hours;
    } else if (minutes < 10) {
        minutes = "0" + minutes;
    } else if (seconds < 10) {
        seconds = "0" + seconds;
    }

    document.getElementById("dayOfWeek").innerHTML = `${days[weekday]}`
    document.getElementById("dayMonth").innerHTML = `${day} ${months[month]}`;
    document.getElementById("hour").innerHTML = `${hours}`;
    document.getElementById("minute").innerHTML = `${minutes}`;
    document.getElementById("month").innerHTML = ``



    const colon = document.getElementById("colon");
    colon.innerHTML.style.visibility = "hidden";



}
setInterval(getTime, 500);
setInterval(colonBlinkLoop, 1000);

function colonBlinkLoop() {
    if (colon.style.visibility === "hidden") {
        colon.style.visibility = "visible";
    } else {
        colon.style.visibility = "hidden";
    }
}

