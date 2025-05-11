const myButton = document.querySelector("#my-button");

myButton.addEventListener("click", moveInput);

const myInput = document.querySelector("#my-input");

let clicked = false;

function moveInput() {
  if (!clicked) {
    myInput.style.translate = "-10px -20px";
    clicked = true;
  } else {
    myInput.style.translate = "0px 0px";
    clicked = false;
  }
}

// const myInpue = document.querySelector('my-input');

// let clicked = false;

// function moveInpute() {
//   if (!clicked) {
//     myiput.style.translate = "10px 20px";
//     clicked = false;
// } else {
//   myiput.style.translate = "0px 0px";
//   clicked = true;
// }
// }
