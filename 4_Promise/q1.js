console.log("A");
const getUserData = (userName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userName.includes("A")) {
        resolve("Hello");
      } else {
        reject("Bye");
      }
      console.log("B");
    }, 3000);
    console.log("C");
  });
};

getUserData("Abc")
  .then((v) => {
    console.log(v);
  })
  .catch((e) => {
    console.log(e);
  });
console.log("D");
setTimeout(() => {
  console.log("E");
}, 2000);
