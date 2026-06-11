console.log("A");

setTimeout(() => {
  console.log("B");
}, 2000);
setTimeout(() => {
  console.log("C");
}, 1000);
setTimeout(() => {
  console.log("D");
}, 0);
setTimeout(() => {
  console.log("E");
});
console.log("F");
