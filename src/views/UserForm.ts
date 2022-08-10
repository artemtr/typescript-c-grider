import {User} from '../models/User'
export class UserForm {
  constructor(public parent, public model: User) {
    this.model.on('change', () => {
      this.render()
    })
  }

  setAge = (): void => {
    this.model.setRandomAge()
  }

  setName = (): void => {
    const name = document.getElementById('name-feild').value
    this.model.setName(name)
  }

  eventsMap(): {[key: string]: () => void} {
    return {
      'click:.set-age': this.setAge,
      'click:.set-name': this.setName,
    }
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap()
    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':')
      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventsMap[eventKey])
      })
    }
  }
  template(): string {
    return `
    <div>
    <h2>User form</h2>
    <div>User name: ${this.model.get('name')}</div>
    <div>User age: ${this.model.get('age')}</div>
    <input type=text />
    <button>Click</button>
    <button class="set-age">Set random age</button>
    <input type=text id="name-feild" />
    <button class="set-name">Set name</button>
    </div>
    `
  }

  render(): void {
    this.parent.innerHTML = ''
    const templateElement = document.createElement('template')
    templateElement.innerHTML = this.template()
    this.bindEvents(templateElement.content)
    this.parent.append(templateElement.content)
  }
}
