function updateSpeedGauge(speed) {
    if (typeof (speed) != 'number') {
        return ("Invalid parameter Value")
    } velocity_gauge = document.getElementById("velocity")
    velocity_gauge.getElementsByTagName("h1")[0].innerText = speed

    velocity_range = 240 //max speed
    if (speed > velocity_range) {
        speed = velocity_range;
    }
    step = 90 / 80 //size of each step image
    turn_angle = step * speed / 3 //angle to turn in each image to get expected fill of bar

    velocity_gauge_bar = velocity_gauge.getElementsByClassName("move")
    for (let i = 1; i <= 3; i++) {
        velocity_gauge_bar[i - 1].setAttribute("style", `transform: rotateZ(${turn_angle * i}deg);`)
    }
}
function updateEngineTempGauge(speed) {
    if (typeof (speed) != 'number') {
        return ("Invalid parameter Value")
    } temperature_gauge = document.getElementById("engineTemp")
    temperature_gauge.getElementsByTagName("h1")[0].innerText = speed

    temperature_range = 120 //max speed
    if (speed > temperature_range) {
        speed = temperature_range;
    }
    step = 90 / (temperature_range/3) //size of each step image
    turn_angle = step * speed / 3 //angle to turn in each image to get expected fill of bar

    temperature_gauge_bar = temperature_gauge.getElementsByClassName("move")
    for (let i = 1; i <= 3; i++) {
        temperature_gauge_bar[i - 1].setAttribute("style", `transform: rotateZ(${turn_angle * i}deg);`)
    }
}

function updateRpmBar(rpm) {
    if (typeof (rpm) != 'number') {
        return ("Invalid parameter Value")
    }
    barPercent = 99 / 10000 * rpm
    rpmValue = document.getElementById("rpmcounter").getElementsByTagName("h1")[0]
    rpmValue.innerText = rpm
    document.getElementById("shiftbar").setAttribute("style", `width:${barPercent}%;`)
}

function updateTpsBar(tps) {
    if (typeof (tps) != 'number') {
        return ("Invalid parameter Value")
    }
    barPercent = 96 / 100 * tps
    tpsmeter = document.getElementById("tpsmeter")
    tpsmeter.setAttribute("style", `height:${barPercent}%;`)
    tpsValueField = document.getElementById("tpsBarPercent")
    tpsValueField.innerText = (tps+"%");
}


function tofullthrottle(){
    tpsValueField = document.getElementById("tpsBarPercent")
    tps = tpsValueField.innerText
    tps = tps.replace('%','');
    tps++;
    if(tps>100){
        tps = 0;
    }
    updateTpsBar(tps)
    
}


//setInterval(tofullthrottle,50)

updateTpsBar(75)
updateRpmBar(10000)
updateSpeedGauge(152)
updateEngineTempGauge(98)