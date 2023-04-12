window.addEventListener("DOMContentLoaded", (event) => {
  const form = document.querySelector("#form");
  const btn = document.querySelector("button");
  const tb = document.querySelector("tbody");

  const active = true;

  const isRequired = value => value === '' ? true : false;
  const valueLenght = (length, min, max) => length < min || length > max ? false : true;
  function validateStr() {
    const re = new RegExp(/^[\w]+$/[A-Za-z])
    return re.test()
  }

  // function checkDate() {
  //   let valid = false 

  //   let birthday = new Date(document.getElementById('dob').value)
  //   const today = new Date()

  //   if(today - birthday)
  // }

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





