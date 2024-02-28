// ---------------------GETTING ALL DATA--------------//

function GetAllDataOnce() {
  db.collection("student")
    .get()
    .then((querySnapshot) => {
      var student = [];
      querySnapshot.forEach((doc) => {
        student.push(doc.data());
      });
      console.log(querySnapshot);
      console.log(student);
      AddAllItemsToTable(student);
    });
}

function GetAllDataRealtime() {
  db.collection("student").onSnapshot((querySnapshot) => {
    var student = [];
    querySnapshot.forEach((doc) => {
      student.push(doc.data());
    });
    AddAllItemsToTable(student);
  });
}
//-------------FILLING TABLE--------------//
var No = 0;
var tbody = document.getElementById("tbody1");

function AddItemToTable(Name, RegNo, Email, LaptopName, serialnumber) {
  let trow = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  let td5 = document.createElement("td");
  let td6 = document.createElement("td");
  let td7 = document.createElement("td");

  td1.innerHTML = ++No;
  td2.innerHTML = RegNo;
  td3.innerHTML = Name;
  td4.innerHTML = Email;
  td5.innerHTML = LaptopName;
  td6.innerHTML = serialnumber;
  td7.innerHTML =
    '<button onclick="editData(this)">Edit</button>' +
    '<button type="button" onclick="deleteData(this)">Delete</button>';

  trow.appendChild(td1);
  trow.appendChild(td2);
  trow.appendChild(td3);
  trow.appendChild(td4);
  trow.appendChild(td5);
  trow.appendChild(td6);
  trow.appendChild(td7);

  tbody.appendChild(trow);
}

function AddAllItemsToTable(student) {
  No = 0;
  tbody.innerHTML = "";
  student.forEach((element) => {
    AddItemToTable(
      element.Name,
      element.Reg,
      element.email,
      element.lap,
      element.serial
    );
  });
}

window.onload = GetAllDataOnce;

function editData(button) {
  // Get the parent row of the clicked button
  let row = button.parentNode.parentNode;

  // Get the cells within the row
  let nameCell = row.cells[1];
  let emailCell = row.cells[2];
  let RegNoCell = row.cells[3];
  let LaptopNamecell = row.cells[4];
  let serialnumbercell = row.cells[5];

  // Prompt the user to enter updated values
  let Name = prompt(
    "Enter the updated Registration number:",
    nameCell.innerHTML
  );
  let email = prompt("Enter the updated name :", emailCell.innerHTML);
  let regNo = prompt("Enter the updated email:", RegNoCell.innerHTML);
  let lapName = prompt(
    "Enter the updated laptop name:",
    LaptopNamecell.innerHTML
  );
  let serialNumber = prompt(
    "Enter the updated serial number:",
    serialnumbercell.innerHTML
  );

  // Update the cell contents with the new values
  nameCell.innerHTML = Name;
  emailCell.innerHTML = email;
  RegNoCell.innerHTML = regNo;
  LaptopNamecell.innerHTML = lapName;
  serialnumbercell.innerHTML = serialNumber;
}
function deleteData(button) {
  try {
    db.collection("student")
      .doc()
      .delete()
      .then(() => {
        console.log("Information deleted successfully");
        alert("Information deleted successfully");
      })
      .catch((error) => {
        console.error("Unable to delete information", error);
      });
  } catch (error) {
    console.log(error);
  }
}
