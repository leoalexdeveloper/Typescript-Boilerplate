import { type middlewareType } from '../Types/router'
import { validationResult } from 'express-validator'

export const catchValidation: middlewareType = async (req, res, next): Promise<void> => {
  const result = validationResult(req)
  console.log(result)
  if (result.isEmpty()) {
    next()
  } else {
    res.status(403).json(result)
  }
}
