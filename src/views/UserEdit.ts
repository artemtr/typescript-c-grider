import {View} from './View'
import {User} from '../models/User'
import {UserProps} from '../models/Model'
import {UserShow} from './UserShow'
import {UserForm} from './UserForm'

export class UserEdit extends View<User, UserProps> {
  regionsMap(): {[key: string]: string} {
    return {
      userShow: '.user-show',
      userForm: '.user-form',
    }
  }

  onRender(): void {
    // do our nesting
    new UserShow(this.regions.userShow, this.model).render()
    new UserForm(this.regions.userForm, this.model).render()
  }
  template(): string {
    return `
      <div>
      <div class="user-show">show</div>
      <div class="user-form">form</div>
      </div>
      `
  }
}
