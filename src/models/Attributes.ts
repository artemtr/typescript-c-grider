import {UserProps} from './User'

export default class Attributes<T> {
  constructor(private data: T) {}
  get<K extends keyof T>(key: K): T[K] {
    // @ts-ignore
    return this.data[propName]
  }

  set(update: T): void {
    // @ts-ignore
    Object.assign(this.data, update)
  }
}
