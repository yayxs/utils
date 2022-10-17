module.exports = {
  root: true, //ESLint 一旦发现配置文件中有 "root": true，它就会停止在父级目录中寻找
  env: {
    node: true, // 启用node环境
  },
  plugins: ['prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-v-html': 'off',
  },
  parserOptions: {
    // parser: 'babel-eslint',
  },
  rules: {
    // 被prettier标记的地方抛出错误信息
    'prettier/prettier': 'error',
  },
  extends: ['plugin:prettier/recommended'],
}
