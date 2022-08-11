import {NextFunction} from 'connect'
import {Router, Request, Response} from 'express'
interface RequestWithBody extends Request {
  body: {[key: string]: string | undefined}
}

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session && req.session.loggedIn) {
    next()
  }
  res.status(403)
  res.send('Protected')
}

const router = Router()
router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
    you log in
    <a href="/logout">Log Out</a>
    `)
  } else {
  }
  res.send(`
  you log out
  <a href="/login">Log in</a>
  `)
})

router.post('/login', (req: RequestWithBody, res: Response) => {
  const {email, password} = req.body
  if (email && password) {
    // mark this person as logged in
    req.session = {loggedIn: true}
    res.redirect('/')
  } else {
    res.send('Invalid email or pass')
  }
})

router.post('/login', (req: RequestWithBody, res: Response) => {})

router.get('/logout', (req: RequestWithBody, res: Response) => {
  req.session = undefined
  res.redirect('/')
})

router.get('/protected', requireAuth, (req: RequestWithBody, res: Response) => {
  res.send('Welcome to protected page')
})

export {router}
