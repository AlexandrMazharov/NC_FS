function addCol() {
  let rows = document.getElementsByClassName("row");
  for (let i = 0; i < rows.length; i++) {
    let row = rows[i].children[rows[i].children.length - 1];
    // if (row.getAttribute("collNumber") == null) {
    console.log(row.attributes.collnumber);
    if (!row.dataset.collnumber) {
      let input = document.createElement("input");
      input.type = "text";
      input.className = "cell";
      row.before(input);
    } else {
      let count = Number(row.getAttribute("collnumber")) + 1;
      let input = document.createElement("input");
      input.dataset.collnumber = count;
      // input.setAttribute("collnumber", count);
      input.type = "button";
      input.className = "cell";
      input.value = "-";
      input.setAttribute("onclick", "dellThisColl(this)");

      row.after(input);
    }
  }
}
function dellCol() {
  let rows = document.getElementsByClassName("row");
  if (rows[0].children.length > 1) {
    for (let i = 0; i < rows.length; i++) {
      rows[i].lastElementChild.remove();
    }
  } else {
    alert("Нельзя удалить последнюю ячейку");
  }
}
function addRow() {
  let lastRow = table.children[table.childElementCount - 2];
  console.log(table.children);
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

function dellThisRow(row) {
  console.log(row.parentNode);
  row.parentNode.remove();
}

function dellThisColl(coll) {
  let thisNumber = Number(coll.getAttribute("collnumber"));
  console.log(thisNumber);
  let rows = document.getElementsByClassName("row");
  console.log(rows[0].childElementCount);
  if (rows[0].childElementCount > 1) {
    console.log(rows);
    for (let i = 0; i < rows.length; i++) {
      rows[i].children[thisNumber + 1].remove();
    }
  } else {
    alert("Нельзя удалить последнюю ячейку");
  }
}
