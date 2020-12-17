const myCall = ()=>{
  // 1 创建个对象
  const obj = new Object()
  // 2 新对象执行连接

  // 3 新对象绑定到函数执行this

  // 4 如果函数没有返回其他对象，那么 new 表达式中的函数调用会自动返回这个新对象
}


const str = ()=>{
  let strTest = `str`
  console.log(typeof strTest)

  console.log(strTest instanceof String) // false

  let strObj = new String('i am str')

  console.log(typeof strObj) // object

  console.log(strObj instanceof String)

  console.log(Object.prototype.toString.call(strObj))
}

str()
