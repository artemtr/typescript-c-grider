import 'reflect-metadata'

export function get(path: string) {
  return function (target: any, key: string, des: PropertyDescriptor) {
    Reflect.defineMetadata('path', path, target, key)
  }
}
