
let grid = document.getElementById("grid");

for (let i = 0; i < 16; i++){
    let intermContainer = document.createElement("div");
    intermContainer.classList.add("intermContainer");
    grid.appendChild(intermContainer);
    for (let j = 0; j < 16; j++){
        let gridItem = document.createElement("div");
        gridItem.classList.add("tile");
        intermContainer.appendChild(gridItem);
    }
} 

let intermContainers = document.querySelectorAll(".intermContainer");
intermContainers.forEach((intermContainer) => {
    intermContainer.style.display = "flex";
    intermContainer.style.borderTop = "solid 1px blue";
    intermContainer.style.borderBottom = "solid 1px blue";
    intermContainer.style.maxWidth = "fit-content";
    // intermContainer.style.maxWidth = "stretch";
    // intermContainer.style.flexGrow = "0";
})

let tiles = document.querySelectorAll(".tile");
tiles.forEach((tile) => {
    tile.style.borderLeft = "solid 1px red";
    tile.style.borderRight = "solid 1px red";
    tile.style.width = "32px";
    tile.style.height = "32px";
