const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("A");
  }, 3000);
}); //3sec resolve(A)

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("B");
  }, 2000);
}); //2sec reject(B)

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("C");
  }, 1500);
}); //1.5sec resolve(C)

const p = Promise.allSettled([p1, p2, p3]);

p.then((v) => {
  console.log(v);
}).catch((err) => {
  console.log("Error", err);
});
