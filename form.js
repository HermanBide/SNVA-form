window.addEventListener("DOMContentLoaded", (event) => {
  const formEl = document.querySelector("#form");
  const tbodyEl = document.querySelector("tbody");
  const tableEl = document.querySelector("table");

  const active = true;

  const isRequired = value => value === '' ? true : false;
  const valueLenght = (length, min, max) => length < min || length > max ? false : true;
  function validateStr() {
    const re = new RegExp(/^[\w]+$/[A-Za-z])
    return re.test()
  }

function store() {
  const firstName = document.getElementById("first_name").value;
  const lastName = document.getElementById("last_name").value;
  const dateOfBirth = document.getElementById("dob").value;
  const dateOfJoin = document.getElementById("doj").value;
  localStorage,setItem("store", JSON.stringify(firstName, lastName, dateOfBirth, dateOfJoin))
  JSON.parse(localStorage.getItem("store"))
}



function onAddTable(e) {
  e.preventDefault();
  const firstName = document.getElementById("first_name").value;
  const lastName = document.getElementById("last_name").value;
  const dateOfBirth = document.getElementById("dob").value;
  const dateOfJoin = document.getElementById("doj").value;
  const birthDate = new Date(dateOfBirth.value)
      const today = new Date()
      if(today.getFullYear() - birthDate.getFullYear() < 18 || today.getMonth() - birthDate.getMonth() > 65 ){
        alert("User is not allowed must be older than 17")
      }

  tbodyEl.innerHTML += `
    <tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${dateOfBirth}</td>
    <td>${dateOfJoin}</td>
    <td><button class="del_Btn">Remove</button></td>
    <td><button class="edit_Btn">Edit</button></td>
    </tr>
  `;
}

function deleteRow(e) {
  e.preventDefault()
  if(!e.target.classList.contains("del_Btn")) {
    return
  }
  const btn = e.target;
  btn.closest('tr').remove();
  alert(" row as been delete")
}

function editRow(e) {
  if(e.target.classList.contains("edit_Btn")) { 
    const btn = e.target;
    btn.closest('tr').change(document.getElementById('edit_Btn'))
  }

}


if(!store) {
    return;
  }
  formEl.addEventListener("submit", onAddTable);
  tableEl.addEventListener("click", deleteRow);
  tableEl.addEventListener("click", editRow);

});





