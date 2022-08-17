const express = require('express');
const path = require('path');

const recipeRouter = require('./routers/recipes');

const app = express();

// Middleware
app.use((req, res, next) => {
  const { method, path } = req;
  console.log(
    `New request to: ${method} ${path} at ${new Date().toISOString()}`
  );
  next();
});

app.use('/api/v1/recipes', recipeRouter);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
