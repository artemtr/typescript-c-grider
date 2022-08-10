import {Collection} from './models/Collection'
import {User} from './models/User'
import {UserProps} from './models/Model'
import {UserForm} from './views/UserForm'
const user = User.buildUser({id: 1, name: 'Artem', age: 45})
const element = document.getElementById('root') as Element | null
if (element) {
  const userForm = new UserForm(element, user)
  userForm.render()
}
