//1-Declare a global variable named allBoldItems
let allBoldItems;
//2-Create a function called getBold_items() that takes no parameter. 
function   getBold_items(){
     allBoldItems = document.querySelectorAll("strong");    
}

//Create a function called highlight() that changes the color of all the bold text to blue.
function  highlight(){
    getBold_items()
    for(let item of allBoldItems){
      item.style.color = "blue";
    }
}
highlight();

//Create a function called return_normal() that changes the color of all the bold text back to black.
  function return_normal(){
     getBold_items()
     highlight()
     for(let colorBlack of allBoldItems){
         colorBlack.style.color = "black";
     }  
 }return_normal();

 //Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph),
  //and the function return_normal() on mouseout (ie. when the mouse pointer is moved out of the paragraph)   
 highlight()
document.querySelector("p").addEventListener("mouseover", mouseOver);
   function mouseOver(){
    document.querySelector("p").style.color = "orange";
   }

 return_normal()
document.querySelector("P").addEventListener("mouseout", mouseOut);
function mouseOut(){
    document.querySelector("p").style.color = "black";
}