const seconds = document.querySelector(".second-hand")
const minutes = document.querySelector(".minute-hand") 
const hours = document.querySelector(".hour-hand")

function update(){
    const date = new Date()
    const [hr,min,sec] =  [date.getHours(),date.getMinutes(),date.getSeconds()];
    const secDeg = ((sec/60)*360)+90;
    seconds.style.transform = `rotate(${secDeg}deg)`;

    const minDeg=(min*6)+90;

    minutes.style.transform = `rotate(${minDeg}deg)`

    const hrDeg = (hr*30)+90;
    hours.style.transform=`rotate(${hrDeg}deg)`;
}

setInterval(update,1000);
