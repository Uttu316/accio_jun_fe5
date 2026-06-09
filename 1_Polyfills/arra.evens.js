// write a polyfill for evens function
/*
    create a function of evens
    takes no parameter 
        access current array 
        loop the current array
        find all even numbers from this array
        
        return array of even numbers
    
    assign the function in Array.prototype
*/

if (!Array.prototype.evens) {
  Array.prototype.evens = function () {
    const evenNumbers = [];

    for (let i = 0; i < this.length; i++) {
      if (this[i] % 2 === 0) {
        evenNumbers.push(this[i]);
      }
    }

    return evenNumbers;
  };
}

const arr = [2, 4, 6, 11, 23, 92, 98, 24, 51];

const evens = arr.evens();
console.log(evens);
