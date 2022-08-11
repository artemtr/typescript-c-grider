import express, {Request, Response} from 'express'
import {router} from './routes/loginRoutes'
import bodyParser from 'body-parser'
import cookiesession from 'cookie-session'
import {router as controllerRouter} from './decorators/controller'
import './controllers/LoginController'

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(cookiesession({keys: ['fdfd']}))
app.use(controllerRouter)
app.use(router)

app.listen(3000, () => {
  console.log('Listen on 3000')
})
