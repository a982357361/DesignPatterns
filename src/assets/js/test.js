function fun(value) {
  this.aaa = value;
  // this.print = () => {
  //   console.log(this.aaa);
  // }

}
fun.prototype.bbb = "2";
fun.prototype.print = function () {
  console.log(this.aaa);
}
fun.prototype.setA = function () {

}
var obj = new fun(1);
fun(2);


// var obj2 = new fun("3")
// obj2.__proto__.bbb = "3";

obj.print();