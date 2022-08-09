import {AxiosResponse, AxiosPromise} from 'axios'
type Callback = () => void
export interface UserProps {
  id?: number
  name?: string
  age?: number
}

interface Eventing {
  on(eventName: string, callback: Callback): void
  trigger(nameOfEvent: string): void
}

interface Sync<T> {
  rootUrl: string
  fetch(id: Number): AxiosPromise

  save(data: T): AxiosPromise
}

interface Attributes<T> {
  get<K extends keyof T>(key: K): T[K]

  set(value: T): void

  getAll(): T
}

interface HasId {
  id?: number
}

export class Model<T extends HasId> {
  constructor(
    private attributes: Attributes<T>,
    private events: Eventing,
    private sync: Sync<T>,
  ) {}

  get get() {
    return this.attributes.get
  }
  set(update: T): void {
    this.attributes.set(update)
    this.events.trigger('change')
  }
  get on(): any {
    return this.events.on
  }
  get trigger() {
    return this.events.trigger
  }
  fetch(): void {
    const id = this.attributes.get('id')

    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without id')
    }
    this.sync.fetch(id).then(response => {
      this.set(response.data)
    })
  }
  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((response: AxiosResponse) => {
        this.trigger('save')
      })
      .catch(() => {
        this.trigger('error')
      })
  }
}
