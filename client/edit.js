const product_id = getIdFromQuery();
const form = document.querySelector('form');
const errorMessage = document.querySelector('#errorMessage');

errorMessage.style.display = 'none';

getProduct(product_id).then(populateFormWithProduct);

function populateFormWithProduct(product) {
    document.querySelector('#title').value = product.title;
    document.querySelector('#description').value = product.description;
    document.querySelector('#price').value = product.price;
    document.querySelector('#quantity').value = product.quantity;
    document.querySelector('#image').value = product.image;

    form.addEventListener('submit', formSubmitted);
}

function formSubmitted(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const title = formData.get('title');
    const price = Number(formData.get('price'));
    const quantity = Number(formData.get('quantity'));

    if (title.trim() === '') {
        errorMessage.textContent = 'Title is required';
        errorMessage.style.display = 'block';
        return;
    }

    if (isNaN(price) || price <= 0) {
        errorMessage.textContent = 'Price must be greater than $0';
        errorMessage.style.display = 'block';
        return;
    }

    if (!Number.isInteger(quantity) || quantity <= 0) {
        errorMessage.textContent = 'Quantity must be a positive whole number';
        errorMessage.style.display = 'block';
        return;
    }

    const product = {
        title,
        description: formData.get('description'),
        price,
        quantity,
        image: formData.get('image')
    };

    updateProduct(product_id, product).then((result) => {
        window.location = `/product.html?id=${product_id}`;
    });
}

function updateProduct(id, product) {
    return fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(product)
    }).then((res) => {
        return res.json();
    });
}
