let p = new Promise((resolve, reject) => {
    // resolve("Promise Resolve Triggred");
    reject("Promise Reject Triggred");
});
p.then((resVal) => {
    console.log("Resolve executed...\n" + resVal);
}).catch((rejVal) => {
    console.log("Reject executed... \n" + rejVal);
})
