var checkAir = function (samples, threshold) {
  var dirtyCount = 0;
  for (var i of samples){
    if (i==='dirty'){
      dirtyCount+=1;
    } 

  }
  LevelOfPollution = dirtyCount / samples.length;
  if (LevelOfPollution > threshold){
    aa = 'Polluted';
  }else {
    aa = 'Clean';
  }return aa
  
  
};



console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))
 