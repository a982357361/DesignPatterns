function fun() {
  this.aaa = "1";
  // this.print = () => {
  //   console.log(this.aaa);
  // }
}
fun.prototype.aaa = "2";
fun.prototype.print = function () {
  console.log(this.aaa);
}
var obj = new fun();
obj.aaa = "2";


var obj2 = {
  aaa: "3"
}

obj.print.call(obj2);