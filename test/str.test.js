import { getParamByName } from '../src/url'

describe('url test', () => {
  const url = 'http://www.baidu.com?a=1&b=aaa'

  describe('获取url参数:getParamByName', () => {
    test(`${url} getParamByName('a',url)  返回 1`, () => {
      expect(getParamByName('a', url)).toBe('1')
    })
  })
})
