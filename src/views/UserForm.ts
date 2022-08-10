import {User} from '../models/User'
import {View} from './View'
import {Model, UserProps} from '../models/Model'
export class UserForm extends View<User, UserProps> {
  setAge = (): void => {
    this.model.setRandomAge()
  }

  saveModel = (): void => {
    this.model.save()
  }

  setName = (): void => {
    const input = document.getElementById(
      'name-feild',
    ) as HTMLInputElement | null

    if (input) {
      const name = input.value
      this.model.setName(name)
    }
  }

  eventsMap(): {[key: string]: () => void} {
    return {
      'click:.set-age': this.setAge,
      'click:.set-name': this.setName,
      'click:.save': this.saveModel,
    }
  }

  template(): string {
    return `
    <div>
    <input placeholder="${this.model.get('name')}">
    <button class="set-age">Set random age</button>
    <input type=text id="name-feild" />
    <button class="set-name">Set name</button>
    </div>
    <button class="save">Save</button>
    `
  }
}
