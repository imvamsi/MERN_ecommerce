const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cookieParser = require('cookie-parser')
require('dotenv').config();
//route imports
const userRoute = require('./routes/user')

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
.then(() => console.log('DB connected'))
mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
  });
//middlewares

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())

app.use('/api',userRoute);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})

