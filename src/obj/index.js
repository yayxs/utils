function shallowClone(target){
  
  let res = Object.assign(obj);
  console.log(res === obj);
}


let obj = {
  name: "yayxs",
  fav: ["chi", "he"],
  firends: [{ name: "zs" }, { name: "ls" }]
};
shallowClone(obj)
