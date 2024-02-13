const product_id = getIdFromQuery();
const productSection = document.querySelector('main section');

getProduct(product_id).then(showProduct);

function showProduct(product) {
    productSection.innerHTML = `
    <div class="card">
        <img src="${product.image}" class="card-img-top" alt="${product.title}">
        <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text">$${product.price}</p>
            <p class="card-text">${product.quantity} left in stock</p>
            <a href="/edit.html?id=${product.id}" class="btn btn-success">Edit Product</a>
            <button id="deleteButton" class="btn btn-danger">Delete Product</button>
        </div>
    </div>
`;

    const deleteButton = document.querySelector('#deleteButton');
    deleteButton.addEventListener('click', () => {
        deleteProduct(product.id).then(() => {
            window.location = '/';
        });
    });
}

function deleteProduct(id) {
    return fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    }).then((res) => res.json());
}
