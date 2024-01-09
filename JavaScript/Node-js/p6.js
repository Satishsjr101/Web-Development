const f1 = (n) => {
    console.log("Inside First: " + n)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(n + 2);
            reject(n + 2);
        }, 1900)
    })
}
// f1().then().catch()
const f2 = (n) => {
    console.log("Insode Second " + n);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(n + 2);
        }, 1800)
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
            reject(n + 2);
        }, 1500)
    })
}

f1(10)
    .then(resVal => { return f2(resVal) }).catch(() => { return "Error  Occur" })
    .then(resVal => { return f3(resVal) }).catch(() => { return "Error  Occur" })
    .then(resVal => { f4(resVal) }).catch(() => { console.log("Error  Occur") });