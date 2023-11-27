const link = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
async function getData()
{
    let res = await fetch(link)
    let data = await res.json();
    cities.push(...data);
    //console.log(cities);
}
getData();
function findMatches(target,cities){
    const regx = new RegExp(target,'gi');
    return cities.filter(place=>{
        return place.city.match(regx) || place.state.match(regx);
    })
}
//  fetch(link)
//  .then(Response=>Response.json())
//  .then(data=>{cities.push(...data); console.log(cities.length)});

/******/

const inp = document.querySelector(".city-inp");
const op = document.querySelector(".search-result");
function display(){
    const matches = findMatches(inp.value,cities);
    op.innerHTML  = "";
    matches.forEach(x=>{

       // console.log("city: "+x.city+" state: "+x.state);
        let node = document.createElement("div");
        node.className = "results";
        node.innerText = x.city+" , "+x.state;
        console.log(node.innerText);
        op.appendChild(node);
    });
}

inp.addEventListener('chage',display);
inp.addEventListener('keyup',display);



 