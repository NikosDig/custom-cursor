const html = document.querySelector("html");

const newCursor = document.createElement("div");
newCursor.classList.add("cursor");
html.appendChild(newCursor);

html.addEventListener("mousemove", (e) => {
  setPosition(newCursor, e);
});

function setPosition(element, e) {
  element.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
}
