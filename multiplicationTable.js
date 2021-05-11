var multiplicationTable = function(maxValue) {

  var table = "";

for(var j = 1; j <= maxValue; j++){
  for(var i = 1; i <= maxValue; i++){ 
    table += " " + i*j;
  }
  table+="\n";
  
}

return table;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));