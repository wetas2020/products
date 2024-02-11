const API_URL = 'http://localhost:3000/';

fetch(API_URL)
    .then((res) => res.json())
    .then((res) => {
        console.log(res);
    });
