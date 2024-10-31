export const isHttpsMailtoTel = (path) => /^(https?:mailto:|tel)/.test(path)

export const isStart = (target) => {
  const regexp = /^\d\d:\d\d$/
  return regexp.test(target)
}
export const isGuoNeiCall = (target) => {
  // 0370-3731666 或者 021-87888822
  const regexp = /\d{3}-\d{8}|\d{4}-\d{7}/
  return regexp.test(target)
}
