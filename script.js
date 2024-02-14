let lightOn = false;

function toggleLight() {
    lightOn = !lightOn;
    const digitalScreen = document.getElementById('digitalScreen');
    const lightSwitch = document.getElementById('lightSwitch');

    if (lightOn) {
        digitalScreen.style.backgroundColor = '#333'; /* Dark background when light is on */
        lightSwitch.style.backgroundColor = '#f0f0f0'; /* Light gray when on */
    } else {
        digitalScreen.style.backgroundColor = '#000'; /* Black background when light is off */
        lightSwitch.style.backgroundColor = '#ddd'; /* Light gray when off */
    }
}

function updateClock() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    const hourHand = document.getElementById("hour");
    const minuteHand = document.getElementById("minute");
    const secondHand = document.getElementById("second");

    const digitalTime = document.getElementById("time");

    const hourRotation = (hours % 12 + minutes / 60) * 360 / 12;
    const minuteRotation = (minutes + seconds / 60) * 360 / 60;
    const secondRotation = seconds * 360 / 60;

    hourHand.style.transform = `translate(-50%, -50%) rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `translate(-50%, -50%) rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `translate(-50%, -50%) rotate(${secondRotation}deg)`;
    
    const timeString = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
    digitalTime.innerText = timeString;

    setTimeout(updateClock, 1000); // Update every second
}

function formatTime(timeUnit) {
    return timeUnit < 10 ? `0${timeUnit}` : timeUnit;
}

updateClock(); // Initial call to display the time
