const API_URL = 'http://localhost:3000/api/v1/products';

function getIdFromQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}
