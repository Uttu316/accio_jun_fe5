const getUserData = (userid) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userid === "abc") {
        resolve("Hello");
      } else {
        reject("oops");
      }
    }, 3000);
  });
};
console.log("start");
getUserData("abc")
  .then((v) => {
    console.log(v);
    return v + "A";
  })
  .then((v) => {
    console.log(v);
    return v + "B";
  })
  .then((v) => {
    console.log(v);
  })
  .then((v) => {
    console.log(v);
    throw v + "C";
  })
  .then((v) => {
    console.log(v);
  })
  .catch((err) => {
    console.log("Error", err);
  });
console.log("end");
