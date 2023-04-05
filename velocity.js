velocity_gauge = document.getElementById("velocity")
instant_speed = Number(velocity_gauge.getElementsByTagName("h1")[0].innerHTML)
console.log(instant_speed)
velocity_range = 240 //max speed
step = 90/80
turn_angle = step * instant_speed/3
velocity_gauge_bar = velocity_gauge.getElementsByClassName("move")
for(let i =1;i<=3;i++){
    console.log(velocity_gauge_bar[i-1])
velocity_gauge_bar[i-1].setAttribute("style",`transform: rotateZ(${turn_angle*i}deg);`)
console.log(turn_angle*i)
}

