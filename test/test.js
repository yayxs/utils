// 是否是16进制
const isHexDigit = (target) => {
  const regexp = /x\p{Hex_Digit}\p{Hex_Digit}/u
  const result = target.match(regexp)
  return result
}
let res
res = isHexDigit('xAf')

// 是否是12::34
const isStart = (target) => {
  const regexp = /^\d\d:\d\d$/
  return regexp.test(target)
}
const isGuoNeiCall = (target) => {
  // 0370-3731666 或者 021-87888822
  const regexp = /\d{3}-\d{8}|\d{4}-\d{7}/
  return regexp.test(target)
}
res = isStart('12:34') // true

console.log(res)
