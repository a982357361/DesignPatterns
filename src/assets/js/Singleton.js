/**
 * 单例模式
 */

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

