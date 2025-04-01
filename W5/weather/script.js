function checkWeather() {

let myTemp = document.querySelector("#myTemp");
console.log(myTemp);
 let temp = myTemp.value;
 console.log(temp);
if(temp<10) { 
  console.log("freezing");
} else if (temp>=10 && temp<20) {
console.log("nice"); 


}

}

function checkWeather() {
  let body = document.querySelector("body");
  let outer = document.querySelector(".outer");
  console.log("I am just being clicked");
  let myInput = document.querySelector("#myTemp");
  let temp = myInput.value;
  console.log("current temp is", temp);
  if (temp >= 20 && temp < 30) {
    body.style.backgroundColor = "orange";
    outer.style.backgroundColor = "purple";
    console.log("it feels sunny and warm");
  } else if (temp >= 10 && temp < 20) {
    body.style.backgroundColor = "lightblue";
    outer.style.backgroundColor = "lime";
    console.log("it feels cold");
  } else if (temp >= 30) {
    body.style.backgroundColor = "black";
    outer.style.backgroundColor = "blue";
    console.log("it is boiling hot");
  } else if (temp < 10) {
    body.style.backgroundColor = "red";
    outer.style.backgroundColor = "yellow";
    console.log("it is freezing");
  }
}
Beta
0 / 0
used queries
1