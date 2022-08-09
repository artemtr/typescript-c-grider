import Eventing from './Eventing'
import axios from 'axios'
import {AxiosResponse} from 'axios'
import {UserProps} from './Model'

export class Collection<UserProps, User> {
  models: User[] = []
  events: Eventing = new Eventing()
  constructor(
    public url: string,
    public deserialize: (json: UserProps) => User,
  ) {}
  get on() {
    return this.events.on
  }

  get trigger() {
    return this.events.trigger
  }

  fetchAll() {
    axios.get(this.url).then((response: AxiosResponse) => {
      response.data.forEach((value: UserProps) => {
        this.models.push(this.deserialize(value))
      })
      this.trigger('change')
    })
  }
}
