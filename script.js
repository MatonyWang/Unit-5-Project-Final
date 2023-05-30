
let button = document.querySelector(".result-button");
let message = document.querySelector(".message");

button.onclick = function() {
  let answer1 = document.querySelector(".answer1").value;
  let answer2 = document.querySelector(".answer2").value;
  
  if (answer1 <= 2 && answer2 === "love") {
   message.innerHTML = "Nigiri";
  } else if (answer1 > 2 && answer2 === "love"){
    message.innerHTML =  "Maki";
  } else if (answer1 <= 2 && answer2 === "explosive"){
    message.innerHTML =  "Uramaki";
  } else if (answer1 > 2 && answer2 === "explosive"){
    message.innerHTML =  "Temaki";
  }
}