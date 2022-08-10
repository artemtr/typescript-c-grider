import {User} from './models/User'
import {UserEdit} from './views/UserEdit'

const user = User.buildUser({id: 1, name: 'Artem', age: 45})

const element = document.getElementById('root')

if (element) {
  const userEdit = new UserEdit(element, user)
  userEdit.render()
}
