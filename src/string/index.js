/**
 *
 * @param {String} str
 * @returns {String}
 * @description 字符串反转
 */
export const reverseStr = (targetStr) => {
  // [ 'i', ' ', 'a', 'm', ' ', 's', 't', 'r' ]
  // [ 'r', 't', 's', ' ', 'm', 'a', ' ', 'i' ]
  // rts ma i
  return targetStr.split('').reverse().join('')
}

reverseStr('i am str')

/**
 *
 * @param {String} str
 * @returns {Boolean}
 * @description 是否是回文字符串
 */
export function isPalindrome(str) {
  // 先反转字符串
  const reversedStr = str.split('').reverse().join('')
  // 判断反转前后是否相等
  return reversedStr === str
}
