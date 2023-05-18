let divsToAdd;
let divCurrentRow;
const container = document.querySelector(".container");

let colorableItems;

let numberOfItems = 16;

function createGrid() {
    for (let i = 0; i < numberOfItems; i++) {
        divCurrentRow = document.createElement("div");
        container.append(divCurrentRow);
        for (let k = 0; k < numberOfItems; k++) {
            divsToAdd = document.createElement("div");
            divsToAdd.classList.add("colorable");
            divsToAdd.style.border = "1px solid gray";
            divsToAdd.style.flex = "0 0 5%";
            divCurrentRow.append(divsToAdd);
        }
    }
    giveColor();
    resizeGrid();
}
createGrid();


function giveColor() {
    colorableItems = document.querySelectorAll(".colorable");

    colorableItems.forEach(element => {
        element.addEventListener("mouseover", e => {
            element.style.backgroundColor = "black";
        })
    });
}
giveColor();

function removeColor() {
    colorableItems = document.querySelectorAll(".colorable");

    colorableItems.forEach(element => {
        element.addEventListener("mouseover", e => {
            element.style.backgroundColor = "white";
        })
    });
}

function randomColor() {
    colorableItems = document.querySelectorAll(".colorable");

    colorableItems.forEach(element => {
        element.addEventListener("mouseover", e => {
            let generatedColors = generateRandomColor();

            let red = generatedColors[0];
            let green = generatedColors[1];
            let blue = generatedColors[2];

            element.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
        })
    });
}

function generateRandomColor() {
    let r = Math.floor(Math.random() * (255 + 1));
    let g = Math.floor(Math.random() * (255 + 1));
    let b = Math.floor(Math.random() * (255 + 1));

    return [r, g, b];
}

function resizeGrid() {
    let containerWidth = container.offsetWidth;
    let cellSize = Math.floor(containerWidth / numberOfItems);

    colorableItems.forEach(element => {
        element.style.width = cellSize + "px";
        element.style.height = cellSize + "px";
    });
}

window.addEventListener("resize", resizeGrid);
resizeGrid();


let resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", e => {
    let newGrid = prompt("Please enter the number of squares per side for the new grid.\nNumbers only, max 100, min 4.");
    if (newGrid == null || newGrid == "" || isNaN(newGrid) || newGrid > 100 || newGrid < 4) {
        console.log("User cancelled the prompt.");
    } else {
        while (container.hasChildNodes()) {
            container.removeChild(container.firstChild)
        }

        numberOfItems = newGrid;
        createGrid();
    }
});

let eraserButton = document.querySelector("#eraser");
eraserButton.addEventListener("click", e => {
    removeColor();
});

let blackButton = document.querySelector("#blackColor");
blackButton.addEventListener("click", e => {
    giveColor();
});

let randomButton = document.querySelector("#randomColor");
randomButton.addEventListener("click", e => {
    randomColor();
});