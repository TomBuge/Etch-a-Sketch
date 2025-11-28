
const container = document.querySelector(".container");
let i = 0; 
while (i < 256) {
    const div = document.createElement("div");
    div.id = i;
    div.style.width = "6.25%"
    div.style.height = "100px"
    div.style.border = "1px solid blue";
    container.appendChild(div);
    i++;
}


/* 
create div element and asign variable 
assign div css style of flex: 1;
assign id equal to i 
append div to container 
*/