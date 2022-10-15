class MyPromise {
    constructor(fun) {
        this.status = "pending";
        this.fun = fun;
    }

    then(resolve, reject) {
        if (this.status === "pending") {
            this.fun(resolve, reject);
            this.status = "end";
        }
    }
}


let promise = new MyPromise((resolve, reject) => {
    console.log(111);
    resolve();
});
promise.then(() => { console.log(222) })


