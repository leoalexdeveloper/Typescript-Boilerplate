import { body, matchedData } from 'express-validator'

export const store = [
  body('name')
    .exists().withMessage('Name should exists')
    .notEmpty().withMessage('Name shouldn\'t be empty')
    .isLength({ min: 4, max: 32 }).withMessage('Name should have more than 4 and less than 32 characters')
    .isAlphanumeric().withMessage('Name should have letters and numbers only')
    .isAscii().withMessage('Name must have only ascii characters'),

  body('email')
    .exists().withMessage('Email should exists')
    .notEmpty().withMessage('Email shouldn\'t be empty')
    .isEmail().withMessage('Email must be a valid email address')
    .isLength({ min: 7, max: 100 }).withMessage('Email should have more than 7 and less than 100 characters')
    .isAscii().withMessage('Email must have only ascii characters'),

  body('password')
    .exists().withMessage('Password should exists')
    .notEmpty().withMessage('Password shouldn\'t be empty')
    .isLength({ min: 8, max: 32 }).withMessage('Password should have more than 4 and less than 32 characters')
    .isAlphanumeric().withMessage('Password should have letters and numbers only')
    .isAscii().withMessage('Password must have only ascii characters'),

  body('confirmation')
    .exists().withMessage('Password should exists')
    .notEmpty().withMessage('Password shouldn\'t be empty')
    .custom((value, { req }) => {
      const { password } = matchedData(req)
      return value === password
    }).withMessage('Confirmation needs to be equal to password')
]
