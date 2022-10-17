import { toString } from './base'

export const isBoolean = (val: any): val is boolean => typeof val === 'boolean'
export const isObject = (val: any): val is object => toString(val) === '[object Object]'
