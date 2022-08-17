const express = require('express');

const recipeRouter = require('./routers/recipesRouters');

const app = express();

// Middleware for logging
app.use((req, res, next) => {
  const { method, path } = req;
  console.log(
    `New request to: ${method} ${path} at ${new Date().toISOString()}`
  );
  next();
});

// Middleware to parse JSON data and make it accessible in the request object (via req.body)
app.use(express.json());
// Middleware to parse incoming requests with URL-encoded payload
app.use(express.urlencoded({ extended: true }));

// Redirect the base URL / to /api/v1/recipes
app.get('/', (req, res) => {
  res.redirect('/api/v1/recipes');
});

app.use('/api/v1/recipes', recipeRouter);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
