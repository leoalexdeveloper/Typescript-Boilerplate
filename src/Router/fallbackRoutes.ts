import { type routeType } from '../Types/router'
/* FallbackRoutes for each method */
export const fallbackRoutes: routeType[] = [
  {
    path: '*',
    method: 'get',
    validation: [],
    middlewares: [],
    actions: []
  },
  {
    path: '*',
    method: 'post',
    validation: [],
    middlewares: [],
    actions: []
  },
  {
    path: '*',
    method: 'put',
    validation: [],
    middlewares: [],
    actions: []
  },
  {
    path: '*',
    method: 'patch',
    validation: [],
    middlewares: [],
    actions: []
  },
  {
    path: '*',
    method: 'delete',
    validation: [],
    middlewares: [],
    actions: []
  }
]
