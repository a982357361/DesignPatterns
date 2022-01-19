/**
 * 装饰器
 */

@decorator
class decoraClass{

}
function decorator(params) {
  params.flag = true;
}
console.log(decoraClass.flag);
