function updateSpeedGauge(speed)
{velocity_gauge = document.getElementById("velocity")
velocity_gauge.getElementsByTagName("h1")[0].innerHTML = speed 

velocity_range = 240 //max speed
if(speed > velocity_range){
    speed  = velocity_range;
}
step = 90/80 //size of each step image
turn_angle = step * speed/3 //angle to turn in each image to get expected fill of bar

velocity_gauge_bar = velocity_gauge.getElementsByClassName("move")
for(let i =1;i<=3;i++){
    console.log(velocity_gauge_bar[i-1])
velocity_gauge_bar[i-1].setAttribute("style",`transform: rotateZ(${turn_angle*i}deg);`)
console.log(turn_angle*i)
}
}

updateSpeedGauge(152)