let inp = document.querySelectorAll(`input`)
let root = document.querySelector(`:root`)
let box = document.querySelector(`.content`)

for(let i=0;i<3;i++)
{
    inp[i].addEventListener('input',function(){
        let val = inp[i].value
        if(i==0)
        {
            root.style.setProperty(`--Spacing`,`${val}px`)
        }
        else if(i==1)
        {
            root.style.setProperty(`--Blur`,`${val}px`)
        }
        else{
            root.style.setProperty(`--ColorBase`,val)
        }
    })

}
