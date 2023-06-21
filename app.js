const express = require("express")
const session = require('express-session')
const exphbs = require("express-handlebars")
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

var handlebars = require('handlebars');
handlebars.registerHelper('dateFormat', require('handlebars-dateformat'));

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const routes = require("./routes")
const usePassport = require('./config/passport')
require('./config/mongoose')
const app = express()
const PORT = process.env.PORT
app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }))
app.set("view engine", "hbs")
app.use(express.static('public'))

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true 
}))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride("_method"))
usePassport(app)

app.use((req, res, next) => {
    // console.log(req.user)
    res.locals.isAuthenticated = req.isAuthenticated()
    res.locals.user = req.user
    next()
})

app.use(routes)

app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`)
})