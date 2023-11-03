import express from 'express'
import { configs } from './config'
import { routes } from './routes'
export { express }

export class Router {
  private readonly app = express()

  /* load settings from config file */
  loadSettings (): Router {
    configs.settings.forEach(config => {
      this.app.use(config)
    })

    /* this function return an instance of Router */
    return this
  }

  /* load routes from routes file */
  loadRoutes (): Router {
    routes.forEach(route => {
      /* route.validation returns an array and because of this its not necessary put route.validation between
      brackets with the spread operator */
      this.app[route.method](route.path, route.validation, [...route.middlewares], [...route.actions])
    })

    /* this function return an instance of Router */
    return this
  }

  /* start server */
  startRouter (): void {
    this.app.listen(configs.port, configs.message)
  }
}

/* exporting the same instance of Router through the router constant */
const router = new Router()

export { router }
