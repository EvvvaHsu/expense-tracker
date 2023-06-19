const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')

const UserModel = require('../models/userModel')

module.exports = app => {

    app.use(passport.initialize())
    app.use(passport.session())

    passport.use(new LocalStratrgy({ usernameField: 'email' }, (email, password, done) => {
        UserModel.findOne({ email })
        .then(user => {
            if (!user) {
                return done(null, false, { message: "The email hasn't been registered!" })
            }

            return bcrypt.compare(password, user.password)
            .then(isMatch => {
                if(!isMatch){
                    return done(null, false, { message: "Email or password is incorrect." })
                }
                return done(null, user)
            }) 
        })
        .catch(err => done(err, false))
    }))


    passport.serializeUser((user, done) => {
        done(null, user.id)
    })

    passport.deserializeUser((id, done) => {
        UserModel.findById(id)
        .lean()
        .then(user => done(null, user))
        .catch(err => done(err, null))

    })

}