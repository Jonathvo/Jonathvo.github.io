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

const section = document.querySelector("section");

section.addEventListener("mouseenter", () => {
  cursor.classList.add("cursor-hover");
});

section.addEventListener("mouseleave", () => {
  cursor.classList.remove("cursor-hover");
});
