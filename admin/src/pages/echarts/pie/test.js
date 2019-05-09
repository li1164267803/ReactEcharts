let a={
    b:[1,2,3,4]
}
let c={}
c.d=JSON.parse(JSON.stringify(a.b))
// 可以实现和深拷贝同样的效果，从元素到元素的原型遍历拷贝
c.d.push(5)
console.log(c)
console.log(a)