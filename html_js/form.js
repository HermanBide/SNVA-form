window.addEventListener("DOMContentLoaded", (event) => {
  const formEl = document.querySelector("#form");
  const tbodyEl = document.querySelector("tbody");
  const tableEl = document.querySelector("table")[0];

  // function validateStr() {
  //   const re = new RegExp(/^[\w]+$/[A-Za-z])
  //   return re.test()
  // }

  const storeInfo = []

  function store(tableEl) {
    localStorage, setItem("store", JSON.stringify(tableEl));
    JSON.parse(localStorage.getItem("store"));
  }

  function onAddTable(e) {
    e.preventDefault();
    const firstName = document.getElementById("first_name").value;
    const lastName = document.getElementById("last_name").value;
    const dateOfBirth = document.getElementById("dob").value;
    const dateOfJoin = document.getElementById("doj").value;
    const birthDate = new Date(dateOfBirth.value);
    const today = new Date();
    if (
      today.getFullYear() - birthDate.getFullYear() < 18
    ) {
      alert("User is not allowed must be older than 17");
    }

    storeInfo.push(firstName, dateOfBirth, birthDate, lastName)

    const row = document.createElement("tr");
    row.innerHTML += `
    <td id="editable">${firstName}</td>
    <td id="editable">${lastName}</td>
    <td id="editable">${dateOfBirth}</td>
    <td id="editable">${dateOfJoin}</td>
    <td><button class="del_Btn">Remove</button></td>
    <td><button class="edit_Btn" onClick='editRow(${i})'>Edit</button></td>
    </tr>
  `;
  tbodyEl.appendChild(row);
  }

  function deleteRow(e) {
    e.preventDefault();
    if (!e.target.classList.contains("del_Btn")) {
      return;
    }
    const btn = e.target;
    btn.closest("tr").remove();
  }


  function editRow(i) {
    if (e.target.classList.contains("edit_Btn")) {
      return;
    }
    document.getElementById("editable"+ i).classList.add("")
  }

  if (!store) {
    return;
  }
  formEl.addEventListener("submit", sessionStorage.setItem('store',onAddTable));
  tableEl.addEventListener("click", deleteRow);
  tableEl.addEventListener("click", editRow);
});
