
/*@@@@@@@@@@@@@--Exercise 1 : Change The Article--@@@@@@@@@@@@@@*/

// Using a DOM property, retrieve the h1 and console.log it.
let retrieveH1 = document.querySelector('h1');
console.log(retrieveH1);

// Using DOM methods, remove the last paragraph in the <article> tag.
let removeLastPara = document.getElementsByTagName('p');
let removeLastPara1 = removeLastPara[3];
removeLastPara1.remove();

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
let clickHideH2 = document.querySelector('h2');
clickHideH2.addEventListener('click', function onClick(event){clickHideH2.style.background = 'red'})

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
let clickHideH3 = document.querySelector('h3');
clickHideH3.addEventListener('click', function onClick(event){clickHideH3.style.display = 'none'})

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
button.addEventListener("click", infos);
function infos(){
        // let mybutton = document.getElementById("button");
        // mybutton.style.fontWeight = "bold";
    let clickOnBold = document.querySelectorAll('p');
        for(let p of clickOnBold){
            p.style.fontWeight = "bold";
        }
}

//6 
retrieveH1.onmouseover = function(){
    this.style.fontSize = "50px";
}

//7
let paragraph2 = document.getElementById('p2');
    paragraph2.addEventListener('mouseover',() => {
        paragraph2.style.animation = "fadeOut 1s";
    })