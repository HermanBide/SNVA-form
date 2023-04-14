const selectedRow = null;

function formSubmit(e) {
  event.preventDefault();
  const viewformData = readformData();
  if (selectedRow === null) {
    insertData(viewformData);
  } else {
    updateRow(formData);
  }
}
// const todayDate = new Date();
// const userBirthdate = new Date(formData["birthdate"]);
// while (userBirthdate.getFullYear() - todayDate.getFullYear() >= 18) {
// }

  function readformData() {
    const formData = {};
    formData["firstname"] = document.getElementById("firstname").value;
    formData["lastname"] = document.getElementById("lastname").value;
    formData["birthdate"] = document.getElementById("birthdate").value;
    formData["joindate"] = document.getElementById("joindate").value;
    return formData;
  }

function insertData(data) {
  const tableEl = document
    .getElementById("data_table")
    .getElementsByTagName("tbody")[0];
  const newRow = tableEl.insertRow(tableEl.length);
  const cell = newRow.insertCell(0);
  cell.innerHTML = data.firstname;
  const cell1 = newRow.insertCell(1);
  cell1.innerHTML = data.lastname;
  const cell2 = newRow.insertCell(2);
  cell2.innerHTML = data.birthdate;
  const cell3 = newRow.insertCell(3);
  cell3.innerHTML = data.joindate;
  const cell4 = newRow.insertCell(4);
  cell4.innerHTML = `<button onClick="updateRow(this)">Edit</button> <button onClick="removeRow(this)">Remove</button>`;
}

function editRow(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("firstname").value = selectedRow.cells[0].innerHTML;
  document.getElementById("lastname").value = selectedRow.cells[1].innerHTML;
  document.getElementById("birthdate").value = selectedRow.cells[2].innerHTML;
  document.getElementById("joindate").value = selectedRow.cells[3].innerHTML;
}

function updateRow(formData) {
  selectedRow.cells[0].innerHTML = formData.firstname;
  selectedRow.cells[1].innerHTML = formData.lastname;
  selectedRow.cells[2].innerHTML = formData.birthdate;
  selectedRow.cells[3].innerHTML = formData.joindate;
}

function removeRow(td) {
  if (confirm("Do you want to remove this row?")) {
    row = td.parentElement.parentElement;
    document.getElementById("data_table").deleteRow(row.rowIndex);
  }
}
