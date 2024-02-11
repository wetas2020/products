const productsSection = document.querySelector('main section');
const API_URL = 'http://localhost:3000/api/v1/products';

getProducts().then(showProducts);

function getProducts() {
    return fetch(API_URL).then((res) => res.json());
}

function showProducts(products) {
    productsSection.innerHTML = products
        .map((product) => {
            return `
            <div class="card col-sm-4">
                <img src="${product.image}" class="card-img-top" alt="${product.title}">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.description}</p>
                    <a href="/product.html/?id=${product.id}" class="btn btn-primary">View Product</a>
                </div>
            </div>
        `;
        })
        .join('');
}
