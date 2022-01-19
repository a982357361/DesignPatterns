/**
 * 观察者模式
 */
interface SubjectImpl {
  add(ob: Observer): void;
  notifyObserver(): void;
}

interface ObserverImpl {
  name: String;
  response(): void;
}

class Subject implements SubjectImpl {
  private observers: Array<Observer> = [];

  public add(ob: Observer) {
    this.observers.push(ob);
  }
  public notifyObserver() {
    console.log("侦测到目标变化，并通知所有观察者");
    this.observers.forEach(item => {
      item.response();
    })
  }
}

class Observer implements ObserverImpl {
  name: String;
  constructor(name: String) {
    this.name = name;
  }
  response() {
    console.log(this.name);
  }
}

var sub = new Subject();
var ob1 = new Observer("观察者1");
var ob2 = new Observer("观察者2");
sub.add(ob1);
sub.add(ob2);
sub.notifyObserver();