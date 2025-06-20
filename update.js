function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

const index = getQueryParam("index");
let employees = JSON.parse(localStorage.getItem("employees")) || [];

if (index === null || !employees[index]) {
  alert("Invalid employee selected");
  window.location.href = "view.html";
}

const emp = employees[index];

document.getElementById("name").value = emp.name;
document.getElementById("email").value = emp.email;
document.getElementById("department").value = emp.department;
document.getElementById("designation").value = emp.designation;
document.getElementById("phone").value = emp.phone;

document.getElementById("updateForm").addEventListener("submit", function (e) {
  e.preventDefault();
  employees[index] = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    department: document.getElementById("department").value.trim(),
    designation: document.getElementById("designation").value.trim(),
    phone: document.getElementById("phone").value.trim(),
  };
  localStorage.setItem("employees", JSON.stringify(employees));
  alert("Employee updated successfully!");
  window.location.href = "view.html";
});
