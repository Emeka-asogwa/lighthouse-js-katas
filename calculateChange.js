let calculateChange = function(total, cash) {
  let change = {
              twentyDollar: 0, 
              tenDollar: 0, 
              fiveDollar: 0, 
              twoDollar: 0, 
              oneDollar: 0, 
              quarter: 0,
              dime: 0,
              nickel: 0,
              penny: 0 
  };
  let diff = cash - total;

while(diff > 0){
  if(diff >= 2000){
    change.twentyDollar = change.twentyDollar + 1;
    diff = diff - 2000;
  }
  else if( diff >= 1000){
    change.tenDollar = change.tenDollar + 1;
    diff = diff - 1000;
  }
  else if( diff >= 500){
    change.fiveDollar = change.fiveDollar + 1;
    diff = diff - 500;
  }
  else if( diff >= 200){
    change.twoDollar = change.twoDollar + 1;
    diff = diff - 200;
  }
  else if( diff >= 100){
    change.oneDollar = change.oneDollar + 1;
    diff = diff - 100;
  }
  else if( diff >= 25){
    change.quarter = change.quarter + 1;
    diff = diff - 25;
  }
  else if( diff >= 10){
    change.dime = change.dime + 1;
    diff = diff - 10;
  }
  else if( diff >= 5){
    change.nickel = change.nickel + 1;
    diff = diff - 5;
  }
  else if( diff >= 1){
    change.penny = change.penny + 1;
    diff = diff - 1;
  }
}


for(j in change) {
  if(change.hasOwnProperty(j)) {
     
      if(change[j] === 0){
        delete change[j];
      }
  }
}

return change;

};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
