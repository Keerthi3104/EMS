function renderTable() {
  let employees = JSON.parse(localStorage.getItem("employees")) || [];
  let table = document.getElementById("employeeTable");

  // Remove old rows
  table.querySelectorAll("tr:not(:first-child)").forEach((tr) => tr.remove());

  employees.forEach((emp, index) => {
    let row = table.insertRow();
    row.innerHTML = `
          <td>${emp.name}</td>
          <td>${emp.email}</td>
          <td>${emp.department}</td>
          <td>${emp.designation}</td>
          <td>${emp.phone}</td>
          <td>
            <a href="update.html?index=${index}"><button>Update</button></a>
            <button onclick="deleteEmployee(${index})">Delete</button>
          </td>
        `;
  });
}

function deleteEmployee(index) {
  let employees = JSON.parse(localStorage.getItem("employees")) || [];
  employees.splice(index, 1);
  localStorage.setItem("employees", JSON.stringify(employees));
  renderTable();
}

renderTable();
