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

function updateLambdaValue(lambda){
    meter = document.getElementById("lambda")
    max_limit = 1.10
    min_limit = 0.5
    range = max_limit - min_limit;
    step = range/5;
    console.log(step)
    if(lambda > max_limit && lambda < min_limit){
        return("Out Of Range")
    }
    else{
        if(lambda < min_limit + step){
            meter.setAttribute("style", "background-image:url('/img/lambda0.png');")
            console.log(step)
        }
        else if((lambda < (min_limit + (step * 2))) && (lambda > (min_limit + step))){
            meter.setAttribute("style", "background-image:url('/img/lambda1.png');")
            console.log(step)
        }
        else if((lambda < (min_limit + (step * 3))) && (lambda > (min_limit + (step * 2)))){
            meter.setAttribute("style", "background-image:url('/img/lambda2.png');")
            console.log(step)
        }
        else if((lambda < (min_limit + (step * 4))) && (lambda > (min_limit + (step * 3)))){
            meter.setAttribute("style", "background-image:url('/img/lambda3.png');")
            console.log(step)
        }
        else if(lambda > (min_limit +(step*4))){
            meter.setAttribute("style", "background-image:url('/img/lambda4.png');")
            console.log(step)
        }
        console.log(lambda)
        document.getElementById("LambdaValueField").innerText = lambda;
    }
}

//setInterval(tofullthrottle,50)
updateLambdaValue(0.75)
updateTpsBar(75)
updateRpmBar(10000)
updateSpeedGauge(152)
updateEngineTempGauge(98)