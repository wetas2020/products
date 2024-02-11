const productsSection = document.querySelector('main section');

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
                    <p class="card-text">$${product.price}</p>
                    <p class="card-text">${product.quantity} left in stock</p>
                    <a href="/product.html?id=${product.id}" class="btn btn-primary">View Product</a>
                </div>
            </div>
        `;
        })
        .join('');
}
