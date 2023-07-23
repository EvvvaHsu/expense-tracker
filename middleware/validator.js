const { check, validationResult } = require('express-validator')

const userValidator = [
  check('name').notEmpty().withMessage('Name is required'),
  check('email').isEmail().withMessage('Please enter a valid email'),
  check('password').isLength({ min: 6, max: 12 }).withMessage('Password must be at least 6 characters to 12 characters'),
  check('confirmPassword').notEmpty().withMessage('Password is not matched').custom((value, { req }) => {
    return value === req.body.password
  }),

  (req, res, next) => {
    const errors = validationResult(req)
    // console.log(errors)
    if (!errors.isEmpty()) {
    //   console.log(errors.mapped())
      return res.render('register', {
        errors: errors.mapped(),
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
      })
    }
    next()
  }
]

module.exports = { userValidator }

// Result {
//     formatter: [Function: formatter],
//     errors: [
//       {
//         type: 'field',
//         value: '',
//         msg: 'Name is required',
//         path: 'name',
//         location: 'body'
//       },
//       {
//         type: 'field',
//         value: '',
//         msg: 'Please enter a valid email',
//         path: 'email',
//         location: 'body'
//       },
//       {
//         type: 'field',
//         value: '',
//         msg: 'Password must be at least 6 characters to 12 characters',
//         path: 'password',
//         location: 'body'
//       },
//       {
//         type: 'field',
//         value: '',
//         msg: 'Password is not matched',
//         path: 'confirmPassword',
//         location: 'body'
//       }
//     ]
//   }

// errors.mapped():
// {
//     name: {
//       type: 'field',
//       value: '',
//       msg: 'Name is required',
//       path: 'name',
//       location: 'body'
//     },
//     email: {
//       type: 'field',
//       value: '',
//       msg: 'Please enter a valid email',
//       path: 'email',
//       location: 'body'
//     },
//     password: {
//       type: 'field',
//       value: '',
//       msg: 'Password must be at least 6 characters to 12 characters',
//       path: 'password',
//       location: 'body'
//     },
//     confirmPassword: {
//       type: 'field',
//       value: '',
//       msg: 'Password is not matched',
//       path: 'confirmPassword',
//       location: 'body'
//     }
//   }
