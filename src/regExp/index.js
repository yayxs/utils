/**
 * 是否是 http/https/mailto/tel 开头
 * @param {String} - path 地址
 * @returns {Boolean}
 */
export const isHttpsMailtoTel = (path) => /^(https?:mailto:|tel)/.test(path)

/**
 * 是否是 '12:34' 格式
 * @param {String} - str
 * @returns {Boolean}
 */
export const isStart = (target) => {
  const regexp = /^\d\d:\d\d$/
  return regexp.test(target)
}

/**
 * 是否是 国内电话
 * @param {String} - 电话号码 0370-3731666 或者 021-87888822
 * @returns {Boolean}
 */
export const isGuoNeiCall = (target) => {
  // 0370-3731666 或者 021-87888822
  const regexp = /\d{3}-\d{8}|\d{4}-\d{7}/
  return regexp.test(target)
}
