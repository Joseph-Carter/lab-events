let currentColor = document.querySelector("#current-color");

const paletteColors = document.querySelectorAll(".color");

const canvas = document.querySelector("main");
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.addEventListener("mouseup", (event) => {
      let selectedColor = currentColor.style.backgroundColor;
      event.target.style.backgroundColor = selectedColor;
    });
    canvas.appendChild(cell);
  }
}

let div = document.createElement("div");
currentColor.append(div);

for (let i = 0; i < paletteColors.length; i++) {
  paletteColors[i].addEventListener("click", (event) => {
    let selectedColor = event.target.style.background;
    currentColor.style.backgroundColor = selectedColor;
    div.classList.add("color");
    div.style.background = selectedColor;
  });
}
