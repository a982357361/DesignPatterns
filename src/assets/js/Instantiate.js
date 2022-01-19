/**
 * 实例化原理
 */

function Fun(name) {
  this.name = name;
  this.print = function () {
    console.log(name);
  }
}

var obj = new Fun("obj");
obj.print();

/**
 * 等价于
 */
var obj2 = {};
obj2.__proto__ = Fun.prototype;
Fun.call(obj2, "obj2");
obj2.print();