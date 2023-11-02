import { express } from './index'
export const config = {
  settings: [
    express.urlencoded({ extended: true }),
    express.json()
  ]
}
