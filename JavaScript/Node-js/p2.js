let p = new Promise((resolve, reject) => { 
        // resolve();
        reject();
});
p.then(()=>{
    console.log("Resolve executed...");
}).catch(()=>{
    console.log("Reject executed...");
})