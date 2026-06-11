console.log("A");
const p = new Promise((resolve, reject) => {
  console.log("B");
  setTimeout(() => {
    if ("A" > "B") {
      resolve("Big");
    } else {
      reject("Small"); // async push cath function in micro task queue
    }
    console.log("C");
  }, 3000);
  console.log("D");
});
console.log("E");

p.then((v) => {
  console.log(v);
}).catch((e) => {
  console.log(e);
});
console.log("F");
