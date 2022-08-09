import {Collection} from './models/Collection'
import {User} from './models/User'
import {UserProps} from './models/Model'

const collection = User.buildUserCollection()
collection.on('change', () => {
  console.log('collection changed')
})

collection.fetchAll()
