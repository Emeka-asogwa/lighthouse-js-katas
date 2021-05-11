var camelCase = function(input) {

  var arrayList = input.split('');
  
  for(var i = 0; i < arrayList.length; i++){
    if(arrayList[i]===" "){
      arrayList.splice(i, 2, arrayList[i+1].toUpperCase());
      }		
  }
  
    return arrayList.join('');
  };
  
  console.log(camelCase("this is a string"));
  console.log(camelCase("loopy lighthouse"));
  console.log(camelCase("supercalifragalisticexpialidocious"));