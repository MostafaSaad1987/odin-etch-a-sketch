let divsToAdd;
let divCurrentRow;
const container = document.querySelector(".container");

let numberOfItems = 16;

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

let colorableItems = document.querySelectorAll(".colorable");

colorableItems.forEach(element => {
    element.addEventListener("mouseover", e => {
        element.style.backgroundColor = "black";
    })
});

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

/*
Add a button to the top of the screen that will send the user a popup asking for
the number of squares per side for the new grid. Once entered,
the existing grid should be removed and a new grid should be generated in the same total space as before (e.g. 960px wide)
so that you’ve got a new sketch pad. Tip: Set the limit for the user input to a maximum of 100.
A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.
-Research  button  tags in HTML and how you can make a JavaScript function run when one is clicked.
-Also check out  prompt s.
-You should be able to enter  64  and have a brand new 64x64 grid pop up without changing the total amount of pixels used.

Push your project to GitHub!

Extra Credit
-Instead of just changing the color of a square from black to white (for example),
have each pass through with the mouse change it to a completely random RGB value.
Then try having each pass just add another 10% of black to it so that only after 10 passes is the square completely black.
*/