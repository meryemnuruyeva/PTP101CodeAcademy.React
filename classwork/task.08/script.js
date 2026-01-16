const API_URL = "http://localhost:3000/employees";
const table = document.getElementById("employeeTable");
const form = document.getElementById("employeeForm");

function loadEmployees() {
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            table.innerHTML = "";
            data.forEach(emp => {
                table.innerHTML += `
                    <tr>
                        <td>${emp.id}</td>
                        <td>${emp.name}</td>
                        <td>${emp.email}</td>
                        <td>${emp.age}</td>
                        <td>${emp.salary}</td>
                        <td>
                            <button class="delete" onclick="deleteEmployee(${emp.id})">Delete</button>
                        </td>
                    </tr>
                `;
            });
        });
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const employee = {
        name: name.value,
        email: email.value,
        age: age.value,
        salary: salary.value
    };

    fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(employee)
    }).then(() => {
        form.reset();
        loadEmployees();
    });
});

function deleteEmployee(id) {
    fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    }).then(loadEmployees);
}

loadEmployees();
