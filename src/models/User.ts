import {Model, UserProps} from './Model'
import Attributes from './Attributes'
import Eventing from './Eventing'
import Sync from './Sync'
const url = 'http://localhost:3000/users'

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new Sync<UserProps>(url),
    )
  }
}
