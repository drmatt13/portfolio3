var test = document.querySelectorAll("button")[0];

document.querySelector("#testButton1").addEventListener("click", function() {
  alert("smokings for losers");
  console.log(test.innerHTML);
});

var testDiv1 = document.getElementById("testDiv1");

document.querySelector(".testDiv1").addEventListener("mouseenter", function(){
  testDiv1.style.setProperty("background-color", "green");
});

document.querySelector(".testDiv1").addEventListener("mouseleave", function(){
  testDiv1.style.setProperty("background-color", "white");
});
