import express, {Request, Response} from 'express'
import {router} from './routes/loginRoutes'
import bodyParser from 'body-parser'
import cookiesession from 'cookie-session'

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(cookiesession({keys: ['fdfd']}))

app.use(router)

app.listen(3000, () => {
  console.log('Listen on 3000')
})
