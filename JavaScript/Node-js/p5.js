const f1 = (n) => {
    console.log("Inside First: " + n)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(n + 2);
        }, 1000)
    })
}

const f2 = (n) => {
    console.log("Insode Second " + n);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(n + 2);
        }, 800)
    })
}

const f3 = (n) => {
    console.log("Insode Third " + n);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(n + 2);
        }, 1200)
    })
}
const f4 = (n) => {
    console.log("Inside Fourth " + n);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(n + 2);
        }, 1500)
    })
}

f1(10)
    .then(resVal => {
        f2(resVal).then(resVal => {
            f3(resVal).then(resVal => {
                f4(resVal).then(() => {
                    console.log("All Task Done...")
                })
            })
        })
    })