/**
 * 单例模式
 */

//第一个实现
var Single = function () {
  if (new.target === undefined)
    throw new Error('必须使用new生成');
  this.name = "name";
  this.num = 0;
  
  if (window.single) {
    return window.single;
  } else {
    window.single = this;
  }
}
Single.prototype.setNum = function(para) {
  this.num = para;
}
Single.prototype.getNum = function() {
  console.log(this.num);
}
var single = new Single();
var single2 = new Single();
single.setNum(10);
single2.getNum();


//第二个实现
var Single2 = (function () {
  var instance = null;
  var Single2 = function () {
    if (new.target === undefined)
      throw new Error('必须使用new生成');
    if (instance)
      return instance;
    return instance = this;
  }
  Single2.prototype.setNum = function(para) {
    this.num = para;
  }
  Single2.prototype.getNum = function() {
    console.log(this.num);
  }
  return Single2;
})()

var single3 = new Single2();
var single4 = new Single2();
single3.setNum(10);
single4.getNum();

/**
 * 新建一个对象obj
 * 将原型上的属性 添加到obj上
 * 执行定义的函数，判断是否有引用类型的返回值，存在则返回这个值。否则返回obj
 * 
 * __proto___对象拥有，指向它的原型 访问对象是否存在属性，若不存在 则会找对象的原型，判断原型中是否有。直到null。
 */
