document.getElementById("addForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let employees = JSON.parse(localStorage.getItem("employees")) || [];
  let emp = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    department: document.getElementById("department").value.trim(),
    designation: document.getElementById("designation").value.trim(),
    phone: document.getElementById("phone").value.trim(),
  };
  employees.push(emp);
  localStorage.setItem("employees", JSON.stringify(employees));
  alert("Employee added successfully!");
  window.location.href = "view.html";
});
