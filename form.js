window.addEventListener("DOMContentLoaded", (event) => {
  const form = document.querySelector("#form");
  const btn = document.querySelector("button");
  const tb = document.querySelector("tbody");

  const active = true;

  if(localStorage) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const firstName = document.getElementById("first_name");
      const lastName = document.getElementById("last_name");
      const dateOfBirth = document.getElementById("dob");
      const dateOfJoin = document.getElementById("doj");
      localStorage.setItem("userInfo", firstName, lastName, dateOfBirth, dateOfJoin);
      localStorage.getItem("userInfo");
    
      if (firstName === " " || lastName === " ") {
        alert("Please fill all fields");
      } else {
        const fnRow = document.createElement("td");
        fnRow.id = "fnRow";
        const lnRow = document.createElement("td");
        fnRow.id = "lnRow";
        const dobRow = document.createElement("td");
        fnRow.id = "dobRow";
        const dojRow = document.createElement("td");
        fnRow.id = "dojRow";
  
        fnRow.innerHTML = firstName.value;
        lnRow.innerHTML = lastName.value;
        dobRow.innerHTML = dateOfBirth.value;
        dojRow.innerHTML = dateOfJoin.value;
        tb.append(fnRow, lnRow, dobRow, dojRow);
  
        const editBtn = document.createElement("button");
        const delBtn = document.createElement("button");
        editBtn.innerHTML = "edit";
        delBtn.innerHTML = "remove";
  
        editBtn.addEventListener("click", (e) => {});
        delBtn.addEventListener("click", (e) => {
          e.target.parent;
        });
        tb.append(editBtn, delBtn);
        if (editBtn === active) {
        }
      }

    });
  }
});

// function editRow() {
//   firstName;
// }

// function checkStr() {
//   let str = "";

//   str.regex();
// }

// function validateStr(str) {
//   if(typeof str === "undefined" || str === null) return false;
//   test.(/^[\w]+$/)
// }
