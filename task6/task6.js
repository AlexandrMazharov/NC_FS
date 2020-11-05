function addCol() {
  let rows = document.getElementsByClassName("row");
  for (let i = 0; i < rows.length; i++) {
    let row = rows[i];
    let input = document.createElement("input");
    input.type = "text";
    input.className = "cell";
    row.prepend(input);
  }
}
function dellCol() {
  let rows = document.getElementsByClassName("row");
  console.log(rows[0].children.length);
  if (rows[0].children.length > 1) {
    for (let i = 0; i < rows.length; i++) {
      rows[i].lastElementChild.remove();    
    }
  } else {
    alert("Нельзя удалить последнюю ячейку");
  }
}
function addRow() {
  let lastRow = table.lastElementChild;
  let newRow = lastRow.cloneNode(true);
  lastRow.after(newRow);
}
function dellRow() {
  if (table.children.length > 1) {
    table.lastElementChild.remove();
  } else {
    alert("Нельзя удалить последнюю строку");
  }
}
