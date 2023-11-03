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
      this.app[route.method](route.path, [...route.validation], [...route.middlewares], [...route.actions])
    })

    /* this function return an instance of Router */
    return this
  }

  /* start server */
  startRouter (): void {
    this.app.listen(configs.port, configs.message)
  }
}

const router = new Router()

export { router }
