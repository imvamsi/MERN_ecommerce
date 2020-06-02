const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
require('dotenv').config();
//route imports
const authRoute = require('./routes/auth')
const userRoute = require('./routes/user')
const categoryRoute = require('./routes/category')
const productRoute = require('./routes/product')

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
app.use(expressValidator())

app.use('/api',authRoute);
app.use('/api', userRoute);
app.use('/api', categoryRoute);
app.use('/api', productRoute);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})

