const secondsElement = document.querySelector(".second");
const minutesElement = document.querySelector(".minute");
const hoursElement = document.querySelector(".hour");

setInterval(setClock, 1000)

function setClock(){
    const time = new Date()
    const seconds = time.getSeconds()
    const minutes = time.getMinutes()
    const hours = time.getHours()

    const secondsRotation =(seconds/60)*360;
    const minutesRotation = (minutes/60) *360 + (seconds/60) *360 //note we added seconds so that the movement of minute hand can be gradual
    const hourRotation = (hours/12)*360 + (minutes/60)*30

    setRotation(secondsElement, secondsRotation);
    setRotation(minutesElement, minutesRotation)
    setRotation(hoursElement, hourRotation);
}
function setRotation(element, angle){
    element.style.setProperty('--rotation', angle)
}
setClock()
