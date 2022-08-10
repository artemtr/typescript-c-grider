import {Router, Request, Response} from 'express'

const router = Router()

router.get('/login', (req: Request, res: Response) => {
  res.send(`
  <form method="POST">
  <label>Email</label>
  <input type="text">
  <label>Password</label>
  <input type="password">
  <button>Submit</button>
  </form>
  `)
})

router.post('/login', (req: Request, res: Response) => {
  const {email, password} = req.body
  res.send('work')
})

export {router}
