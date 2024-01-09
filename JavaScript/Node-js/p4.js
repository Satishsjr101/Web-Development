const f1 = (n) => {
    return new Promise((resolve, reject) => {
        if (n % 2 == 0)
            resolve("Resolve ex...");
        else
            reject("Reject ex....");
    })
}
f1(11).then((resVal) => {
    console.log(resVal);
}).catch((rejVal) => {
    console.log(rejVal);
})
