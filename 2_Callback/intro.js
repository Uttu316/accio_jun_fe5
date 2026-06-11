var x = 0;

function print(value) {
  console.log("Output is", value);
}

function doSum(x, y, callback, action) {
  let p = x + y;
  let o = callback(p, y) + callback(y, p);
  action(o);
}
function doCalc(a, b) {
  let s = x++ + a - b;
  return s;
}

doSum(2, 3, doCalc, print);
