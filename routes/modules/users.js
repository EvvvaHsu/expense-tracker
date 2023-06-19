const express = require('express')
const router = express.Router()

const bcrypt = require('bcryptjs')
const UserModel = require('../../models/userModel')
const passport = require('passport')

router.get('/login', (req, res) => {
    res.render('login')
})

router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/users/login'
}))

router.get('/register', (req, res) => {
    res.render('register')
})

router.post('/register', (req, res) => {
    const { name, email, password, confirmPassword } = req.body

    UserModel.findOne({ email })
        .then(user => {
            if (user) {
                console.log('這個email已經註冊過了')
                res.render('register', {
                    name, email, password, confirmPassword
                })
            } else {
                return UserModel.create({
                    name,
                    email,
                    password
                })
                    .then(() => res.redirect('/'))
                    .catch(err => console.log(err))
            }
        })
        .catch(err => console.log(err))
})

router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/users/login')
})



module.exports = router