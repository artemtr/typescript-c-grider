export class UserForm {
  constructor(public parent) {}

  onButtonCLick(): void {
    console.log('Hi there')
  }

  eventsMap(): {[key: string]: () => void} {
    return {
      'click:button': this.onButtonCLick,
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
    
    <input type=text />
    <button>Click</button>
  
    </div>
    `
  }

  render(): void {
    const templateElement = document.createElement('template')
    templateElement.innerHTML = this.template()
    this.bindEvents(templateElement.content)
    this.parent.append(templateElement.content)
  }
}
