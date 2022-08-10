import {View} from './View'
import {UserProps} from '../models/Model'
import {User} from '../models/User'

export class UserShow extends View<User, UserProps> {
  template() {
    return `
    <div>
    <h1>User Detail</h1>
    <div>User Name: ${this.model.get('name')}</div>
    <div>User Age: ${this.model.get('age')}</div>
    </div>
    `
  }
}
