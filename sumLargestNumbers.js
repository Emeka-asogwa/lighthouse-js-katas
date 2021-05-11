var sumLargestNumbers = function (arr){ 
  //lst=[];
  var max = Math.max.apply(null, arr); // get the max of the array
  //lst.push(max);
  arr.splice(arr.indexOf(max), 1); // remove max from the array
  //return Math.max.apply(null, arr); // get the 2nd max
  var max2 = Math.max.apply(null, arr);
  //lst.push(max2); //testing to make sure it printed the two numbers
  
  return max+max2;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));   












    









