const tableBody = document.querySelector("#customersTable tbody");
let customersData = [];

fetch("https://northwind.vercel.app/api/customers")
    .then(res => res.json())
    .then(data => {
        customersData = data;
        loadTable(data);
    });

function loadTable(data) {
    tableBody.innerHTML = "";

    data.forEach((c, index) => {
        const row = `
            <tr>
                <td>${index + 1}</td>
                <td>${c.companyName}</td>
                <td>${c.contactName}</td>
                <td>${c.contactTitle}</td>
                <td>${c.address?.city || ""}</td>
                <td>${c.address?.country || ""}</td>
                <td>${c.address?.phone || ""}</td>
                <td>
                    <button onclick="deleteCustomer('${c.id}')">Delete</button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

function deleteCustomer(id) {
    if (!confirm("Are you sure you want to delete this customer?")) return;

    fetch(`https://northwind.vercel.app/api/customers/${id}`, {
        method: "DELETE"
    })
    .then(() => {
        // UI'dan sil
        customersData = customersData.filter(c => c.id !== id);
        loadTable(customersData);
    })
    .catch(err => console.error("Delete error:", err));
}

function searchTable() {
    const value = document.getElementById("searchInput").value.toLowerCase();

    const filtered = customersData.filter(c =>
        c.companyName.toLowerCase().includes(value) ||
        c.contactName.toLowerCase().includes(value) ||
        c.address?.country?.toLowerCase().includes(value)
    );

    loadTable(filtered);
}
