const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (4 % 2 === 0) {
      resolve("Even"); //fullfilled
    } else {
      reject("Odd"); // rejected state
    }
  }, 2000);
});

p.finally(() => {
  console.log("Done");
})
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });
