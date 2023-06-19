const express = require("express")
const exphbs = require("express-handlebars")

var handlebars = require('handlebars');
handlebars.registerHelper('dateFormat', require('handlebars-dateformat'));

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const routes = require("./routes")
require('./config/mongoose')
const app = express()
const PORT = process.env.PORT
app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }))
app.set("view engine", "hbs")
app.use(express.static('public'))





app.use(routes)

app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`)
})