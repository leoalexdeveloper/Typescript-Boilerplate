import { express } from './index'
export const configs = {
  settings: [
    express.urlencoded({ extended: true }),
    express.json()
  ],
  port: 3000,
  message: () => { console.log('Server running.') }
}
