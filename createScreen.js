const drawArea = document.querySelector(".draw");

const table = document.createElement("table");

let tdCount = 0;

for(let trCount = 0; trCount <= 32; trCount++){
  const tr = document.createElement("tr");

  for(let tdCount = 0; tdCount <= 32; tdCount++){
    let td = document.createElement("td");
    td.classList.add("square");
    tr.appendChild(td);
  }

  table.appendChild(tr);
  tdCount = 0;
}

drawArea.appendChild(table);
