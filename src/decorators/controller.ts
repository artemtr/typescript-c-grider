import 'reflect-metadata'
import express from 'express'

export const router = express.Router()

export function controller(routePrefix: string) {
  return function (target: Function) {
    for (const key in target.prototype) {
      console.log(key)

      router.get('/login', (req, res) => {
        res.send('still')
      })
    }
  }
}
