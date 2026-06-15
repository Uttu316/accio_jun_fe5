const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("A");
  }, 3000);
});

// then function invoke with resolved value
// promise functions return a new promise object
const p2 = p
  .then((v) => {
    console.log(v); // A
    return v + "B"; // returned value is resolved value for next promise
  })
  .catch((err) => {
    console.log("Error", err);
  });

p2.then((v) => {
  console.log("p2 then", v);
}).catch((err) => {
  console.log("p2 error", err);
});
