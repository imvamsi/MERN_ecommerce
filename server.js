const express = require('express')
const app = express();
require('dotenv').config();
//route imports
const userRoute = require('./routes/user')

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
.then(() => console.log('DB connected'))
mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
  });


app.use(userRoute);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})

