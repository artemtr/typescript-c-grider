import {Sorter, Sort} from './Sorter'
import {NumberCollection} from './NumberCollection'
import {CharacterCollection} from './CharactersCollection'

const numberCollection = new NumberCollection([9, 1, 5, 6, 8, 9])
const sorter = new Sorter(numberCollection)

sorter.sort()

console.log(numberCollection.data)

const characterCollection = new CharacterCollection('Wait')
const sorter2 = new Sorter(characterCollection)
sorter2.sort()
console.log(characterCollection.data)
