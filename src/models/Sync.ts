import axios, {AxiosPromise} from 'axios'
interface hasId {
  id?: Number
}
export default class Sync<T extends hasId> {
  constructor(public rootUrl: string) {}

  fetch(id: Number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`)
  }

  save(data: T): AxiosPromise {
    const {id} = data
    if (id) {
      return axios.put(`${this.rootUrl}/${id}`, data)
    } else {
      return axios.post(`${this.rootUrl}/`, data)
    }
  }
}
