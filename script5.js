let btn = document.getElementById("btn");
let div = document.querySelector("div");

button.addEventListener("click", clickEvent)
button.addEventListener("mouseover", mouseoverEvent);
button.addEventListener("mouseout", mouseoutEvent);

function clickEvent(){
    let randomColor = (Math.floor(Math.random()*0xFFFFFF)).toString(16);
    let text = document.createElement("h1");
    text.innerHTML = "JE SUIS HEUREUX A ATOS DIGITAL ACADEMY CI !";
    text.style.color = "#" + randomColor;
    div.appendChild(text);
}

function mouseoutEvent(){
    let randomColor = (Math.floor(Math.random()*0xFFFFFF)).toString(16);
    div.style.background ="#" + randomColor

}

function mouseoverEvent(){
    div.style.background = "url(https://media.gettyimages.com/id/1279050214/fr/photo/bureaux-modernes-lobby-zone-int%C3%A9rieure-avec-ascenseurs-et-escaliers-et-avec-longue-r%C3%A9ception.jpg?s=2048x2048&w=gi&k=20&c=9FaEoUB6lG2tdsAehqDXR_try8NuLJPSVgfi8Epmpt4=)";
    div.style.backgroundSize = "cover";
    div.style.backgroundRepeat = "no-repeat";
    
}