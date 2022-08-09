import axios, {AxiosResponse} from 'axios'
import {runInThisContext} from 'vm'
import Eventing from './Eventing'
import Sync from './Sync'
import Attributes from './Attributes'
export interface UserProps {
  id?: number
  name?: string
  age?: number
}
export class User {
  public events: Eventing = new Eventing()
  public sync: Sync<UserProps> = new Sync<UserProps>(
    'http://localhost:3000/users',
  )
  public attributes: Attributes<UserProps>
  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs)
  }
  get get() {
    return this.attributes
  }
  set(update: UserProps): void {
    this.attributes.set(update)
    this.events.trigger('change')
  }
  get on(): any {
    return this.events.on
  }
  get trigger() {
    return this.events.trigger
  }
  fetch() {}
  save() {}
}
