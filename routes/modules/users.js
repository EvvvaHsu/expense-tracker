const express = require('express')
const router = express.Router()

const bcrypt = require('bcryptjs')
const UserModel = require('../../models/userModel')
const passport = require('passport')

const { userValidator } = require('../../middleware/validator')

router.get('/login', (req, res) => {
  res.render('login')
})

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/users/login',
  failureFlash: true
}))

router.get('/register', (req, res) => {
  res.render('register')
})

router.post('/register', userValidator, (req, res) => {
  const { name, email, password, confirmPassword } = req.body
  const errormsg = []

  // if (!name || !email || !password || !confirmPassword) {
  //   errors.push({ message: '所有欄位都是必填!' })
  // }

  // if (password !== confirmPassword) {
  //   errors.push({ message: '密碼與確認密碼不相符' })
  // }
  // if (errors.length) {
  //   return res.render('register', {
  //     errors,
  //     name,
  //     email,
  //     password,
  //     confirmPassword
  //   })
  // }

  UserModel.findOne({ email })
    .then(user => {
      if (user) {
        errormsg.push({ message: '這個email已經註冊過了' })
        return res.render('register', {
          errormsg, name, email, password, confirmPassword
        })
      }

      return bcrypt
        .genSalt(10)
        .then(salt => bcrypt.hash(password, salt))
        .then(hash => UserModel.create({
          name,
          email,
          password: hash
        }))
        .then(() => {
          req.flash('success_msg', '註冊成功')
          res.redirect('/users/login')
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
})

router.get('/logout', (req, res) => {
  req.logout()
  req.flash('success_msg', '你已經成功登出')
  res.redirect('/users/login')
})

module.exports = router
