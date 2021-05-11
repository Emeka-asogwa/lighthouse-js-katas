var conditionalSum = function(num, condi){
  var sum=0;
  for(var i=0;i<num.length;i++){
    if(num[i]%2===0 && condi==='even'){
    sum=sum+num[i];
    }
    else if(num[i]%2 !==0 && condi==='odd'){
      sum=sum+num[i];
    };
  }return sum; 
}
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));