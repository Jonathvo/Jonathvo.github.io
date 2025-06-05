// ======= Custom Cursor Setup =======
const cursor = document.querySelector(".custom-cursor");

// Update cursor position on mouse move
document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

// Elements that trigger cursor hover effect
const hoverTargets = ["h1", "figure", "button", "sound"];

hoverTargets.forEach((selector) => {
  const element = document.querySelector(selector);
  if (element) {
    element.addEventListener("mouseenter", () =>
      cursor.classList.add("cursor-hover")
    );
    element.addEventListener("mouseleave", () =>
      cursor.classList.remove("cursor-hover")
    );
  }
});
