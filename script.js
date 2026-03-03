const gridContainer=document.querySelector("#grid");
let cellSide=16;
function gridCreation(){
    gridContainer.innerHTML="";
    const gridSize=cellSide*26.25;
    gridContainer.style.width=`${cellSide * 26.25}px`;
    gridContainer.style.height=`${cellSide * 26.25}px`;
    const cellPercent= 100/cellSide;
    let totalSize=cellSide*cellSide;
    for (let i=0;i<totalSize;i++)
    {
        const gridCell=document.createElement("div");
        gridCell.classList.add("gridCell");
        gridCell.style.width=`${cellPercent}%`;
        gridCell.style.height=`${cellPercent}%`;
        gridContainer.appendChild(gridCell);
    }
    const cells=document.querySelectorAll(".gridCell");
    const colors = ["red", "blue", "yellow", "green"];
    cells.forEach(cell => {
    cell.addEventListener("mouseover", () => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        cell.style.backgroundColor = randomColor;
    })
})
}
const btn=document.querySelector("button");
btn.addEventListener("click",()=>{

    cellSide= prompt("Enter number of cell for next grid.");
    gridCreation();
})
gridCreation();
