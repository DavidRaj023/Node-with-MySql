const express = require('express');
const bodyparser = require('body-parser');


const app = express();
app.use(bodyparser.json());

// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});

// Require user routes
const userRoutes = require('./src/routes/user.routes');

// using as middleware
app.use('/api/v1/user', userRoutes);



const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server started on port 3000');
})