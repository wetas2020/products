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
* [ ] Show one record in /product.html?id=:id
  * [ ] Parse query string to get id
  * [ ] AJAX Request to GET /products/:id
  * [ ] Append to DOM
  * [ ] Display link to /edit.html?id=:id
* [ ] Create a record with POST /api/v1/products
  * [ ] Create route
  * [ ] Validate product!
  * [ ] Create query
* [ ] Create a record in /new.html
  * [ ] Display a form with input boxes for all fields
  * [ ] Display a button to submit the creation of the resource
    * [ ] Validate all inputs
    * [ ] POST /products
    * [ ] Successful creation should redirect to /product.html?id=:id
* [ ] Update a record with PUT /api/v1/products/:id
  * [ ] Create route
  * [ ] Validate id
  * [ ] Validate updates
  * [ ] Create query
* [ ] Update one record in /product.html?id=:id
  * [ ] Display a form with input boxes for all fields
  * [ ] Display a button to submit the update of the resource
    * [ ] Validate all inputs
    * [ ] PUT /products/:id
    * [ ] Successful update should redirect to /product.html?id=:id
* [ ] Delete a record with DELETE /api/v1/products/:id
  * [ ] Create route
  * [ ] Validate id
  * [ ] Create query
* [ ] Delete a record
  * [ ] Add a delete button to the /product.html page
    * [ ] DELETE /products/:id
    * [ ] Successful deletion should redirect to index.html
* [ ] Deploy server to Heroku
  * [ ] Signup and login to heroku
  * [ ] Install the heroku CLI
  * [ ] Create a heroku app
  * [ ] Push to heroku
  * [ ] View heroku logs
* [ ] Add Postgres DB to Heroku
  * [ ] Add postgres addon
  * [ ] Add production connection to knex
  * [ ] Run migrations on production DB
  * [ ] Run seeds on production DB
* [ ] Deploy client to firebase
  * [ ] Signup and login to firebase
  * [ ] Install the firebase CLI
  * [ ] Create a firebase app
  * [ ] Push to firebase
