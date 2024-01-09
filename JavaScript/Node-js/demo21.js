function f(a, b, callback) {
    console.log(" " + (a + b));
    callback();
}

f(10, 20, () => {
    console.log("CallBack Callled....");
});