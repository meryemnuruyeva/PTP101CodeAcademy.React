const tbody = document.getElementById("tbody");
const form = document.getElementById("productForm");

function toggleForm() {
    form.classList.toggle("d-none");
}

const products = [
    {
        title: "silver ring",
        category: "men's clothing",
        price: 55.99,
        image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png",
        rating: 4.7
    },
    {
        title: "short socks",
        category: "men's clothing",
        price: 15.99,
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
        rating: 2.1
    },
    {
        title: "Macbook",
        category: "jewelery",
        price: 1200,
        image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png",
        rating: 4.6
    },
    {
        title: "Lenovo Log",
        category: "jewelery",
        price: 1750,
        image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png",
        rating: 3.9
    },
    {
        title: "White Gold Plated Princess",
        category: "jewelery",
        price: 9.99,
        image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png",
        rating: 3
    },
    {
        title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
        category: "jewelery",
        price: 10.99,
        image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png",
        rating: 1.9
    },
    {
        title: "nyese",
        category: "Robot",
        price: 64,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
        rating: 3.3
    },
    {
        title: "Solid Gold Petite Micropave",
        category: "jewelery",
        price: 64,
        image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png",
        rating: 3.3
    },
    {
        title: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
        category: "electronics",
        price: 64,
        image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png",
        rating: 3.3
    },
    {
        title: "Acer SB220Q bi 21.5 inches Full HD IPS Ultra-Thin",
        category: "electronics",
        price: 64,
        image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png",
        rating: 3.3
    },
    {
        title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
        category: "electronics",
        price: 64,
        image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png",
        rating: 3.3
    },
    {
        title: "Silicon Power 256GB SSD 3D NAND A55",
        category: "electronics",
        price: 64,
        image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_t.png",
        rating: 3.3
    }
];

function render() {
    tbody.innerHTML = "";

    products.forEach((p, i) => {
        tbody.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>
                    <img src="${p.image}" width="45">
                </td>
                <td class="text-start">${p.title}</td>
                <td>${p.category}</td>
                <td>$${p.price}</td>
                <td>${p.rating}</td>
                <td>
                    <button class="btn btn-sm btn-outline-danger"
                            onclick="removeProduct(${i})">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </td>
            </tr>
        `;
    });
}

function addProduct() {
    const title = document.getElementById("title").value;
    const category = document.getElementById("category").value;
    const price = document.getElementById("price").value;
    const image = document.getElementById("image").value;
    const rating = document.getElementById("rating").value;

    if (!title || !category || !price || !image || !rating) {
        alert("Bütün sahələri doldur!");
        return;
    }

    products.push({ title, category, price, image, rating });
    render();
    toggleForm();

    document.querySelectorAll("#productForm input").forEach(i => i.value = "");
}

function removeProduct(index) {
    if (confirm("Məhsulu silmək istədiyinizə əminsiniz?")) {
        products.splice(index, 1);
        render();
    }
}

render();


