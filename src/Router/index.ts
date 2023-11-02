import express from 'express'

export { express }

export class Router {
  private readonly app = express()

  loadSettings (): Router {
    return this
  }

  loadRoutes (): Router {
    return this
  }

  startRouter (): void {

  }
}
