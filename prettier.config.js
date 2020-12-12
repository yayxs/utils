/**
 * @author yayxs
 * @description 配置Prettier https://prettier.io/docs/en/options.html
 */

module.exports = {
  printWidth: 80, //一行的字符数，如果超过会进行换行，默认为80
  tabWidth: 2, //一个tab代表几个空格数，默认为80
  useTabs: false, //是否使用tab进行缩进，默认为false，表示用空格进行缩减
  semi: false, //行位是否使用分号，默认为true
  trailingComma: 'es5', //是否使用尾逗号，有三个可选值"<none|es5|all>"
  bracketSpacing: true, //对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
  singleQuote: true, // 使用单引号而不是双引号
  quoteProps: 'as-needed', //仅在需要时在对象属性周围添加引号
  jsxSingleQuote: false, // 在JSX中使用单引号而不是双引号
  jsxBracketSameLine: false,
  arrowParens: 'always', //在单独的箭头函数参数周围包括括号。
  htmlWhitespaceSensitivity: 'ignore',
  vueIndentScriptAndStyle: true, // 是否缩进Vue文件中的代码<script>和<style>标记。有些人（例如Vue的创建者）不缩进以保存缩进级别，但这可能会破坏编辑器中的代码折叠。
  endOfLine: 'lf', //在Linux和macOS以及git repos内部通用
}
