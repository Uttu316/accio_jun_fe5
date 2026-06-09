// write a polyfill for includes function

/*
    create a function of includes
    take 2 parameters (targetValue,fromIndex)
        access current array using "this" keyword
        loop the current array
            match the targetValue with current value
                if matched:return true
        return false
    
    assign the function in Array.prototype
*/

//only assign when not present, other just use inbuilt function
if (!Array.prototype.includes) {
  Array.prototype.includes = function (targetValue, fromIndex) {
    const currArray = this;

    if (!fromIndex) {
      fromIndex = 0;
    }

    for (let i = fromIndex; i < currArray.length; i++) {
      const curr = currArray[i];
      if (curr === targetValue) {
        return true;
      }
    }
    return false;
  };
}

const arr = ["A", "B", "C", "D"];

const isPresent = arr.includes("a");
console.log(isPresent);
