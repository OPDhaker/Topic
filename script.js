let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let number = Math.ceil(Math.random()*360);

btn.onclick = function(){
  container.style.transform = "rotate("+ number + "deg)"
  number += Math.ceil(Math.random()*360);
}