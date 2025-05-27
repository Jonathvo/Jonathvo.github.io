const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

const h1 = document.querySelector("h1");

h1.addEventListener("mouseenter", () => {
  cursor.classList.add("cursor-hover");
});

h1.addEventListener("mouseleave", () => {
  cursor.classList.remove("cursor-hover");
});

const figure = document.querySelector("figure");

figure.addEventListener("mouseenter", () => {
  cursor.classList.add("cursor-hover");
});

figure.addEventListener("mouseleave", () => {
  cursor.classList.remove("cursor-hover");
});

const button = document.querySelector("button");

button.addEventListener("mouseenter", () => {
  cursor.classList.add("cursor-hover");
});

button.addEventListener("mouseleave", () => {
  cursor.classList.remove("cursor-hover");
});

const sound = document.querySelector("sound");

sound.addEventListener("mouseenter", () => {
  cursor.classList.add("cursor-hover");
});

sound.addEventListener("mouseleave", () => {
  cursor.classList.remove("cursor-hover");
});
