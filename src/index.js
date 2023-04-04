const path = require('path');
const express = require('express')
const morgan = require('morgan')
const handle = require('express-handlebars');


const db = require('./config/db')

db.connect();

const app = express()
const port = 3000

const route = require('./routes')
app.use(express.static(path.join(__dirname, 'public')))
// HTTP logger
app.use(morgan('combined'))

//Template engine
app.engine('hbs', handle.engine({
  extname: '.hbs'
}))
app.set('view engine', 'hbs')
// app.set('views', './views')
app.set('views', path.join(__dirname, 'resources/views'));

//trang chu, gioi thieu, lien he


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(express.json());
app.use(express.urlencoded());

// route init
route(app)
