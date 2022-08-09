import axios, {AxiosPromise} from 'axios'
interface hasId {
  id?: Number
}
export default class Sync<T extends hasId> {
  constructor(public rootUrl: string) {}

  fetch(id: Number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`)
  }

  save(data: T): void {
    const id = data.id
    if (id) {
      axios.put(`${this.rootUrl}/${id}`, data)
    } else {
      axios.post(`${this.rootUrl}/`, data)
    }
  }
}
