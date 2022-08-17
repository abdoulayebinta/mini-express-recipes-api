# RESTful API with Node.js and Express.js

## How to use this app

- clone the app
- Run npm install
- Run the app with: npm run dev

NB: You can use Postman for better experience

## API Endpoints

- GET http://localhost:8080/api/v1/recipes to get all recipes
- GET http://localhost:8080/api/v1/recipes/1 to get a single recipe with id=1
- POST http://localhost:8080/api/v1/users/signup to create an account (this will give you a token that you can use). Set the Content-Type in the Headers to application/json
- POST http://localhost:8080/api/v1/recipes is a protected route, you will need the token generated during signup. Attach the token to the authorization headers as a Bearer Toekn

## Packages installed

- express
- nodemon
- cors
- bcrypt: hash user's password before storing it in the database
- jsonwebtoken
- passport: authenticate a request
- passport-jwt
- dotenv
