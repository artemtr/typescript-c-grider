import {Collection} from './models/Collection'
import {User} from './models/User'
import {UserProps} from './models/Model'
import {UserForm} from './views/UserForm'

const userForm = new UserForm(document.getElementById('root'))

userForm.render()
