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
}
createGrid();


function giveColor() {

    colorableItems = document.querySelectorAll(".colorable");

    colorableItems.forEach(element => {
        element.addEventListener("mouseover", e => {
            element.style.backgroundColor = "black";
        })
    });

    resizeGrid();
}
giveColor();


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

/*
Extra Credit
-Instead of just changing the color of a square from black to white (for example),
have each pass through with the mouse change it to a completely random RGB value.
Then try having each pass just add another 10% of black to it so that only after 10 passes is the square completely black.
*/