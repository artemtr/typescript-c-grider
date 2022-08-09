import {User} from './models/User'

const user = User.buildUser({id: 4, name: 'Hon', age: 56})

user.on('change', () => {
  console.log('woek')
})
user.trigger('change')
