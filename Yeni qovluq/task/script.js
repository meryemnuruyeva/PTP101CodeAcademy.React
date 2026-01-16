const apiUrl = 'https://fakestoreapi.com/products';
const Tbody = document.querySelector("tbody");

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(userData => {


        userData.forEach((product)=>{
            const trElem = document.createElement("tr")
            trElem.innerHTML = `
             <td>${product.id}</td>
             <td>${product.title}</td>
             <td>${product.price}</td>
             <td>${product.description}</td>
            `

            Tbody.appendChild(trElem)
        })
        // console.log('User Data:', userData);
    })
    .catch(error => {
        console.error('Error:', error);
    });