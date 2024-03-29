# Coding With Saad

## Full Stack JavaScript

Build a full stack application that allows users to view products, add products, update products and delete products.

We'll be using:

* Client:
  * Vanilla JavaScript for DOM Manipulation and fetch for AJAX requests
  * Bootstrap for style and layout
* Server:
  * Mysql for our database
  * knex.js for our database migrations, seeds and queries.
  * express.js for our JSON routes

* Prerequisites (Mac OS Commands)
  * Latest version of Node.js
    * brew install node
  * lite-server or live server vscode
    * npm install -g lite-server
  * Mysql
    * brew install mysql
    * brew services start mysql
    * createdb
  * Express Generator
    * npm install -g express-generator
  * Knex installed globaly
    * npm install -g knex

## Check List

* [x] Setup client folder
  * [x] index.html
  * [x] Add bootswatch CDN
  * [x] Create app.js
  * [x] git init
* [x] Create a server folder
  * [x] Generate Express App
  * [x] git init
* [x] Convert Express App to JSON API
  * [x] Remove view rendering/views folder
  * [x] Remove routes folder
  * [x] Remove static serve and public folder
  * [x] Update error handler
  * [x] Add GET `/` endpoint
* [x] Client: Try to make a request
  * [x] See the CORS error and remember this moment
  * [x] Add CORS to the API
* [x] Create database
* [x] Initialize knex project
  * [x] Install knex and mysql
  * [x] Create knexfile.js
* [x] Create product table migration
* [x] Seed product table with sample data
* [x] Add api folder and create/mount router
* [x] Connect to the database
  * [x] Create database connection file
  * [x] Create a queries file
* [x] List all records with GET /api/v1/products
  * [x] Create query
  * [x] Create route
* [x] List all records in /index.html
  * [x] AJAX Request to GET /products
  * [x] Append to DOM
  * [x] Each product links to /product.html?id=:id
  * [x] Display a link to /create.html
* [x] Show one record with GET /api/v1/products/:id
  * [x] Validate id
  * [x] Create query
  * [x] Create route
* [x] Show one record in /product.html?id=:id
  * [x] Parse query string to get id
  * [x] AJAX Request to GET /products/:id
  * [x] Append to DOM
  * [x] Display link to /edit.html?id=:id
* [x] Create a record with POST /api/v1/products
  * [x] Create route
  * [x] Validate product!
  * [x] Create query
* [x] Create a record in /new.html
  * [x] Display a form with input boxes for all fields
  * [x] Display a button to submit the creation of the resource
    * [x] Validate all inputs
    * [x] POST /products
    * [x] Successful creation should redirect to /product.html?id=:id
* [x] Update a record with PUT /api/v1/products/:id
  * [x] Create route
  * [x] Validate id
  * [x] Validate updates
  * [x] Create query
* [x] Update one record in /product.html?id=:id
  * [x] Display a form with input boxes for all fields
  * [x] Display a button to submit the update of the resource
    * [x] Validate all inputs
    * [x] PUT /products/:id
    * [x] Successful update should redirect to /product.html?id=:id
* [x] Delete a record with DELETE /api/v1/products/:id
  * [x] Create route
  * [x] Validate id
  * [x] Create query
* [x] Delete a record
  * [x] Add a delete button to the /product.html page
    * [x] DELETE /products/:id
    * [x] Successful deletion should redirect to index.html
* [x] Deploy server to Heroku
  * [x] Signup and login to heroku
  * [x] Install the heroku CLI
  * [x] Create a heroku app
  * [x] Push to heroku
  * [x] View heroku logs
* [x] Add Postgres DB to Heroku
  * [x] Add postgres addon
  * [x] Add production connection to knex
  * [x] Run migrations on production DB
  * [x] Run seeds on production DB
* [x] Deploy client to firebase
  * [x] Signup and login to firebase
  * [x] Install the firebase CLI
  * [x] Create a firebase app
  * [x] Push to firebase
