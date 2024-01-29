const box = document.querySelector("#background");
const box2 = document.querySelector("body");

document.getElementById("background").addEventListener("click", function () {
   if (box.classList.contains("isBlack")) {
    box.classList.remove("isBlack");
    document.body.style.backgroundColor = "white";;
  } else {
    box.classList.add("isBlack");
    document.body.style.backgroundColor = "black";;
  } 
  alert("Background Change")
});