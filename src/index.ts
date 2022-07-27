import fs from 'fs'
let fileContent = fs
  .readFileSync('./football.csv', {
    encoding: 'utf-8',
  })
  .split('\n')
  .map((item: string): string[] => {
    return item.split(',')
  })

let count: number = 0

let MunUMathes = fileContent.filter(item => {
  return item.includes('Man United')
})
console.log(MunUMathes)

MunUMathes.map(item => {
  if (item.includes('A')) {
    count++
  }
})
console.log(count)
