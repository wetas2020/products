const products = require('../data/products');

exports.seed = async function (knex) {
    await knex('product').del();
    await knex('product').insert(products);
};
