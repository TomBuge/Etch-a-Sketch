
const container = document.querySelector(".container");


function makeGrids(num) {
    container.textContent = "";
    let divWidth = 100 / num;

    let i = 0; 
    while (i < num * num) {
        const div = document.createElement("div");
        div.id = i;
        div.classList.add("grid");
        div.style.width = `${divWidth}%`;
        div.style.aspectRatio = "1 / 1";
        // div.style.border = "1px solid blue";
        container.appendChild(div);
        i++;
    }
}

function addGridColor()  {

    const grids = document.querySelectorAll(".grid");
    

    grids.forEach(grid => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const rgb = `rgb(${r}, ${g}, ${b})`;
        grid.addEventListener("mouseenter", (e) => {
            grid.style.background = rgb;
        })
        
    });
}

makeGrids(16);
addGridColor();

const button = document.querySelector("button");

button.addEventListener("click", () => {
    let num = prompt("Choose a number between 4 - 100 for pen thickness");
    if (num > 100 || num < 4) {
        num = prompt("Please enter a valid number between 4 and 100");
    }
    makeGrids(num);
    addGridColor();  
});

