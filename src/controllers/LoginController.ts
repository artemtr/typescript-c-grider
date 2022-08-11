import {Request, Response} from 'express'
import {get} from '../decorators/routes'
import {controller} from '../decorators/controller'

@controller('/auth')
class LoginController {
  @get('/login')
  getLogin(req: Request, res: Response): void {
    res.send(`
    <form method="POST">
    <label>Email</label>
    <input type="text" name="email">
    <label>Password</label>
    <input type="password" name="password">
    <button>Submit</button>
    </form>
    `)
  }
}
