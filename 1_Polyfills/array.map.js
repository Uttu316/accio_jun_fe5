let array = ["A", "B", "C", "D"];

if (!Array.prototype.map) {
  Array.prototype.map = function (callback) {
    let curr = this;
    let output = []; // create a new array for output
    for (let i = 0; i < curr.length; i++) {
      let o = callback(curr[i], i, curr);
      output.push(o); // store the returned value of callback
    }
    return output; // return the output array
  };
}

// array.forEach((item,index,currArray)=>{
//     console.log(item,index,currArray)
// })

let ans = array.map((item, index, currArray) => {
  return item + index;
});
console.log(ans);
