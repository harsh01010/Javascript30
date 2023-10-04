const paths = [`./assets/sounds/boom.wav`,`./assets/sounds/clap.wav`,`./assets/sounds/hihat.wav`,`./assets/sounds/kick.wav`,`./assets/sounds/openhat.wav`,`./assets/sounds/ride.wav`,`./assets/sounds/snare.wav`,`./assets/sounds/tink.wav`,`./assets/sounds/tom.wav`]

const ind = ['a','s','d','f','g','h','j','k','l'];
const drum = document.querySelectorAll(".drum")
const body = document.querySelector("body")

   
    body.addEventListener('keydown',function(event){
        console.log(event)
        for(let i = 0;i<drum.length;i++)
    {
        if(event.key == ind[i]){
        let audio = new Audio(paths[i]);
        audio.play();
        console.log(drum[i].innerHTML)}
    }
    })


