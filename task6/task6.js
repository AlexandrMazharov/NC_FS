
function addCol(current) {
  let row = current.parentNode;
  let input = document.createElement("input");
  input.type = "text";
  row.prepend(input);
}
function dellCol(current) {
  let row = current.parentNode;
  if (row.children.length > 3) row.childNodes[0].remove();
  else {
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
