import fs from 'fs'
import {Countable} from './Countable'
let fileContent = fs
  .readFileSync('./football.csv', {
    encoding: 'utf-8',
  })
  .split('\n')
  .map((item: string): string[] => {
    return item.split(',')
  })

class Footbal extends Countable {
  count: number = 0
  constructor(
    public data: string[][],
    public team: string,
    public homeWin: number | string,
    public awayWin: number | string,
    public draw: number | string,
  ) {
    super()
  }
}

const footbal = new Footbal(fileContent, 'Man United', 'H', 'A', 'D')

function count(teams: any) {
  teams.data
    .filter((item: string[]) => {
      return item.includes(teams.team)
    })
    .map((item: string[]) => {
      if (item.includes(teams.homeWin)) {
        teams.count++
      }
    })
}

count(footbal)

console.log(footbal.count)
