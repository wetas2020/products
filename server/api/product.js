const express = require('express');
const router = express.Router();
const queries = require('../db/queries');

// /api/v1/products

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

module.exports = router;
