
function getTimeFromURL() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get("time")) || 10; // Default to 3 minutes if no time is provided
}

let totalSeconds = getTimeFromURL(); // Get time from URL //start time

function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

function updateTimer(){
    document.getElementById("timer").textContent = formatTime(totalSeconds);
    totalSeconds--; //decrease time every second

    if (totalSeconds == 0){
        window.location.href ="../pages/done.html";
    }
}


window.onload = function() {
    setInterval(updateTimer,1000);
};