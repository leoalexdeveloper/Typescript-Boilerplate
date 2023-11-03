import { type routeType } from '../../Types/router'
import * as User from './services'
import * as Validate from './validations'
import { catchValidation } from '../../Middlewares/CatchValidation'

export const routes: routeType[] = [
  {
    path: '/user',
    method: 'get',
    validation: [],
    middlewares: [],
    actions: [User.show]
  },
  {
    path: '/user/',
    method: 'post',
    /* Validate.store returns an Array and because of this is not necessary put it inside an Array here */
    validation: Validate.store,
    middlewares: [catchValidation],
    actions: [User.store]
  },
  {
    path: '/user/:id',
    method: 'put',
    validation: [],
    middlewares: [],
    actions: [User.update]
  },
  {
    path: '/user/:id',
    method: 'patch',
    validation: [],
    middlewares: [],
    actions: [User.update]
  },
  {
    path: '/user/:id',
    method: 'delete',
    validation: [],
    middlewares: [],
    actions: [User.del]
  }
]
