const removingGarbage = () => {
    console.log("Removing Garbage in progress...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Garbage Removed...");
        }, 3000);
    })
}
const roomCleaning = () => {
    console.log("Room Cleaning in progress..");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Room Cleaned...");
            // reject("Room not Cleaned...");
        }, 1800);
    })
}
Promise.all([removingGarbage(), roomCleaning()])
    .then((result) => {
        console.log(result[0] + "\nthen -> " + result[1]);
        console.log("I love to do Coding...");
    })
    .catch((rejectedVal) => {
        console.log(rejectedVal);
        console.log("I hate to do Coding...");
    })
