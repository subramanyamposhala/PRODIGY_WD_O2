let seconds = 0;
let interval = null;
let laps = [];

function startStopwatch() {
    if (interval) return; // Prevent multiple intervals
    interval = setInterval(updateTime, 1000);
}

function pauseStopwatch() {
    clearInterval(interval);
    interval = null;
}

function resetStopwatch() {
    clearInterval(interval);
    interval = null;
    seconds = 0;
    laps = [];
    document.getElementById("time").innerText = "00:00:00";
    document.getElementById("laps").innerHTML = ""; // Clear laps
}

function recordLap() {
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    let lapTime = 
        (hrs < 10 ? "0" + hrs : hrs) + ":" +
        (mins < 10 ? "0" + mins : mins) + ":" +
        (secs < 10 ? "0" + secs : secs);

    laps.push(lapTime);
    displayLaps();
}

function displayLaps() {
    const lapList = document.getElementById("laps");
    lapList.innerHTML = ""; // Clear the list
    laps.forEach((lap, index) => {
        const li = document.createElement("li");
        li.innerText = `Lap ${index + 1}: ${lap}`;
        lapList.appendChild(li);
    });
}

function updateTime() {
    seconds++;
    
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    document.getElementById("time").innerText =
        (hrs < 10 ? "0" + hrs : hrs) + ":" +
        (mins < 10 ? "0" + mins : mins) + ":" +
        (secs < 10 ? "0" + secs : secs);
}




