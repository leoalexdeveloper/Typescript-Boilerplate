import { type routeType } from '../Types/router'
import { fallbackRoutes } from './fallbackRoutes'
import { routes as UserRoutes } from '../Features/User/routes'
/* this file import all routes from all modules that could be created in the future */
export const importedRoutes: routeType[] = [
  ...UserRoutes,
  ...fallbackRoutes
]
