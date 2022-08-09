type Callback = () => void

export default class Eventing {
  private events: {[key: string]: Callback[]} = {}
  on = (eventName: string, callback: Callback): void => {
    const handlers = this.events[eventName] || []
    handlers.push(callback)
    this.events[eventName] = handlers
  }

  trigger = (nameOfEvent: string): void => {
    const handlers = this.events[nameOfEvent]

    if (!handlers) {
      return
    }

    handlers.forEach(element => {
      element()
    })
  }
}
