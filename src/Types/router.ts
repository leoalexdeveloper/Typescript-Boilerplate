import type { Request, Response, NextFunction } from 'express'

import type { ValidationChain } from 'express-validator'

type supportedHtmlVerbs = 'get' | 'post' | 'put' | 'patch' | 'delete'

type middlewareType = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void> | void

type actionType = (
  req: Request,
  res: Response
) => Promise<void> | void

interface routeType {
  path: string
  method: supportedHtmlVerbs
  validation: ValidationChain[]
  middlewares: middlewareType[]
  actions: actionType[]
}

export type {
  Request,
  Response,
  NextFunction,
  ValidationChain,
  middlewareType,
  actionType,
  supportedHtmlVerbs,
  routeType
}
