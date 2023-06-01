## e-commerce-API
This is a backend API for a E-commerce application. It is built using Node.js and MongoDB with the help of the Express framework.

## Installation
<hr>
<ul>
<li>Clone the repository using git clone</li>
<li>Install dependencies using npm install</li>
<li>Start the server using npm start</li>
</ul>

## Features
<ul>
<li>create product name and quntity</li>
<li>change the quntity</li>
<li>Delete the product using ID</li>
</ul>

## Usage
<hr>
Use Postman or a similar tool to make HTTP requests to the API endpoints listed below.

## Routes Required
<hr>
<ul>
<li>
URL [POST]: /products/create
</li>
<li>
URL [GET] : /products
</li>
<li>
URL [DELETE] : /products/:id
</li>
<li>
URL [POST] : /products/:id/update_quantity/?number=10
</li>
</ul>