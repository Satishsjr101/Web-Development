var first = (val, callback) => {
    setTimeout(() => {
        callback(val + 2);
        console.log("First executed...");
    }, 1000)
}
var second = (val, callback) => {
    setTimeout(() => {
        callback(val + 2);
        console.log("Second executed...");
    }, 800)
}
var third = (val, callback) => {
    setTimeout(() => {
        callback(val + 2);
        console.log("Third executed...");
    }, 500)
}

var fourth = (val) => {
    setTimeout(() => {
        console.log("Fourth executed...");
    }), 1200;
}

first(10, (n) => {
    second(n, (n) => {
        third(n, (n) => {
            fourth(n);
        })
    })
})