export interface Sort {
  data: any
  swap(leftIndex: number, rightIndex: number): void
  compare(leftIndex: number, rightIndex: number): boolean
  get length(): number
}
export class Sorter {
  constructor(public collection: Sort) {}

  sort(): void {
    const {length} = this.collection
    for (let index = 0; index < length; index++) {
      for (let j = 0; j < length - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1)
        }
      }
    }
  }
}
