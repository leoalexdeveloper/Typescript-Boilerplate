import type { routeType } from '../Types/router'

import { importedRoutes } from './importedRoutes'

/* this file only receive importedRoutes and export to be loaded into the loadRoutes method inside Router class */
export const routes: routeType[] = [
  ...importedRoutes
]
