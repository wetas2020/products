const express = require('express');
const router = express.Router();
const queries = require('../db/queries');

// /api/v1/products

function validProduct(product) {
    const hasTitle = typeof product.title == 'string' && product.title.trim() != '';
    // const hasDescription =
    //     typeof product.description == 'string' && product.description.trim() != '';
    const hasPrice = !isNaN(product.price);
    const hasQuantity =
        !isNaN(product.quantity) && product.quantity > 0 && Number.isInteger(product.quantity);
    // const hasImage = typeof product.image == 'string' && product.image.trim() != '';
    return hasTitle && hasPrice && hasQuantity;
}

router.get('/', (req, res) => {
    queries.getAll().then((products) => {
        res.json(products);
    });
});

router.get('/:id', (req, res) => {
    if (isNaN(req.params.id)) {
        res.status(400).json({
            error: 'Invalid ID'
        });
    } else {
        queries.getOne(req.params.id).then((product) => {
            if (product) {
                res.json(product);
            } else {
                res.status(404).json({
                    error: 'Not Found'
                });
            }
        });
    }
});

router.post('/', (req, res) => {
    if (validProduct(req.body)) {
        const { title, description, price, quantity, image } = req.body;
        const product = {
            title,
            description,
            price,
            quantity,
            image
        };
        queries.create(product).then((id) => {
            res.json({
                id
            });
        });
    } else {
        res.status(400).json({
            error: 'Invalid Product'
        });
    }
});

router.put('/:id', (req, res) => {
    // validate id
    if (isNaN(req.params.id)) {
        res.status(400).json({
            error: 'Invalid ID'
        });
    }
    // validate product
    if (validProduct(req.body)) {
        queries.update(req.params.id, req.body).then((product) => {
            res.json({
                message: 'Updated'
            });
        });
    } else {
        res.status(400).json({
            error: 'Invalid Product'
        });
    }
});

module.exports = router;
