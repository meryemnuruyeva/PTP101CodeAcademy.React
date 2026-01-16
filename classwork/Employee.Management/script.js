const form = document.getElementById("employeeForm");
const tableBody = document.getElementById("employeeTableBody")

const API_URL = "http://localhost:3000/employees";

    async function getEmployees() {
        try {
            const res = await axios.get(API_URL);
            renderTable(res.data);
        } catch (err) {
            console.error(err);
        }

    }

function renderTable(employees) {
    tableBody.innerHTML = "";

    if (employees.length === 0) {
        tableBody.innerHTML = `
        <tr>
           <td colspan="6>No employees yet</td>
        </tr>
        `;
        return;
    }
}

employees.forEach((emp, index) => {
    table.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${emp.name}</td>
            <td>${emp.email}</td>
            <td>${emp.age}</td>
            <td>${emp.price}</td>
            <td>
                <button class="btn-edit" onclick="editEmployee(${index})">Edit</button>
                <button class="btn-delete" onclick="deleteEmployee(${index})">Delete</button>
            </td>
        </tr>`;
});


function editEmployee(index) {
    const emp = employees[index];
    document.getElementById("name").value = emp.name;
    document.getElementById("email").value = emp.email;
    document.getElementById("age").value = emp.age;
    document.getElementById("price").value = emp.price;
    document.getElementById("editId").value = index;
}

function deleteEmployee(index) {
    if (confirm("Are you sure?")) {
        employees.splice(index, 1);
        renderTable();
    }
}

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("age").value = "";
    document.getElementById("price").value = "";
}
